import {Component, OnInit} from '@angular/core';
import {ProductionFormComponent} from '../../production/production-form/production-form.component';
import {ProductionTableComponent} from '../../production/production-table/production-table.component';
import {RouterLink} from '@angular/router';
import {NgIf} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import {SecurityModule} from 'src/app/security/security.module';
import {ReportResourceService} from '../../../api/services/report-resource.service';
import {FormsModule} from '@angular/forms';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import {getSalesSummaryTemplate} from '../sales-summary.template';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { getProductionSummaryTemplate } from '../production-summary.template';
import { getPurchaseSummaryTemplate } from '../purchase-summary.template';
import { getFarmSummaryTemplate } from '../farm-summary.template';
import { getSalarySummaryTemplate } from '../salary-summary.template';


pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-monthly-reports',
  templateUrl: './monthly-reports.component.html',
  standalone: true,
  imports: [
    ProductionFormComponent,
    ProductionTableComponent,
    RouterLink,
    NgIf,
    ReactiveFormsModule,
    PdfViewerModule,
    SecurityModule,
    FormsModule
  ],
})
export class MonthlyReportsComponent implements OnInit {

  pdfSrc: any;
  selectedReport: string;
  startDate: string; 
  endDate: string;

  constructor(
    private service: ReportResourceService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {

  }

  generateReport() {
    switch (this.selectedReport) {
      case 'Sales Summary':
        this.generateSalesSummaryReport(this.startDate,this.endDate);
        break;
      case 'Purchases Summary':
        this.generatePurchaseSummaryReport(this.startDate,this.endDate);
        break;
      case 'Salary Payments':
        this.generateSalarySummaryReport(this.startDate,this.endDate);
        break;
      case 'Production Summary':
        this.generateProductionSummaryReport(this.startDate,this.endDate);
        break;
      case 'Farm Summary':
        this.generateFarmSummaryReport(this.startDate,this.endDate);
        break;
      default:
        
        break;
    }
  }

  
  generateSalesSummaryReport(startDate: string, endDate: string) {
    this.service.getSalesSummary({ startDate, endDate }).subscribe({
      next: (data) => {
      let totalUnitCost = 0;
      let totalRevenue = 0;
      let totalProfit = 0;
      let templateData = {
        items: data,
      };

      data.forEach((item) => {
        const itemUnitCost = item.unitCost * item.orderQty;
        const itemRevenue = item.unitPrice * item.purchaseQty;
        totalUnitCost += itemUnitCost;
        totalRevenue += itemRevenue;
        totalProfit += itemRevenue - itemUnitCost;
      });

      templateData['totalUnitCost'] = totalUnitCost;
      templateData['totalRevenue'] = totalRevenue;
      templateData['totalProfit'] = totalProfit;

      let template = getSalesSummaryTemplate(templateData);
      const pdfDocGenerator = pdfMake.createPdf(template);

      pdfDocGenerator.getBlob((blob) => {
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
          const unsafeDataUrl = fileReader.result as string;
          const safeDataUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(unsafeDataUrl);
          this.pdfSrc = safeDataUrl;
        };
        fileReader.readAsDataURL(blob);
      });
    },
    error: (err) => {
      console.log(err);
    },
  });
}

generateProductionSummaryReport(startDate: string, endDate: string) {
  this.service.getProductionSummary({ startDate, endDate }).subscribe({
    next: (data) => {
      let totalProduction = 0;
      let variances = []; 

      let templateData = {
        items: data,
      };

      data.forEach((item) => {
        const farmId = item.farmId;
        const plantName = item.plantName;
        const estimatedProduction = item.estimatedProduction;
        const actualProduction = item.actualProduction;
        const variance = estimatedProduction - actualProduction;
        variances.push(variance); 
        totalProduction += actualProduction;
      });

      templateData['productionTotal'] = totalProduction;

      let template = getProductionSummaryTemplate(templateData);
      const pdfDocGenerator = pdfMake.createPdf(template);

      pdfDocGenerator.getBlob((blob) => {
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
          const unsafeDataUrl = fileReader.result as string;
          const safeDataUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(unsafeDataUrl);
          this.pdfSrc = safeDataUrl;
        };
        fileReader.readAsDataURL(blob);
      });
    },
    error: (err) => {
      console.log(err);
    },
  });
}


  generatePurchaseSummaryReport(startDate: string, endDate: string) {
    this.service.getPurchaseSummary({ startDate, endDate }).subscribe({
      next: (data) => {

        let templateData = {
          items: data,
        };
  
        let purchaseTotal=0;

        data.forEach((item) => {
          const week = item.week;
          const productName = item.productName;
          const Qty = item.qty;
          const unitPrice = item.unitPrice;
           purchaseTotal += Qty*unitPrice;
          
        });

        templateData['totalPurchase'] = purchaseTotal;

        let template = getPurchaseSummaryTemplate(templateData);
        const pdfDocGenerator = pdfMake.createPdf(template);
  
        pdfDocGenerator.getBlob((blob) => {
          const fileReader = new FileReader();
          fileReader.onloadend = () => {
            const unsafeDataUrl = fileReader.result as string;
            const safeDataUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(unsafeDataUrl);
            this.pdfSrc = safeDataUrl;
          };
          fileReader.readAsDataURL(blob);
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  generateFarmSummaryReport(startDate: string, endDate: string) {
    this.service.getFarmSummary({ startDate, endDate }).subscribe({
      next: (data) => {

        let templateData = {
          items: data,
        };
  
        let variance=0;

        data.forEach((item) => {
          const farmId = item.farmId;
          const plantName = item.plantName;
          const estimatedProduction = item.estimatedProduction;
          const actualProduction = item.actualProduction;
          variance +=estimatedProduction-actualProduction;
          
        });

        templateData['productionTotal'] = variance;

        let template = getFarmSummaryTemplate(templateData);
        const pdfDocGenerator = pdfMake.createPdf(template);
  
        pdfDocGenerator.getBlob((blob) => {
          const fileReader = new FileReader();
          fileReader.onloadend = () => {
            const unsafeDataUrl = fileReader.result as string;
            const safeDataUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(unsafeDataUrl);
            this.pdfSrc = safeDataUrl;
          };
          fileReader.readAsDataURL(blob);
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  generateSalarySummaryReport(startDate: string, endDate: string) {
    this.service.getSalarySummary({ startDate, endDate }).subscribe({
      next: (data) => {

        let templateData = {
          items: data,
        };
  
        let salaryTotal=0;

        data.forEach((item) => {
          const empId = item.employeeId;
          const salaryAmount = item.amount;
          const empName = item.employeeName;
      
           salaryTotal += salaryAmount;
          
        });

        templateData['totalSalary'] = salaryTotal;

        let template = getSalarySummaryTemplate(templateData);
        const pdfDocGenerator = pdfMake.createPdf(template);
  
        pdfDocGenerator.getBlob((blob) => {
          const fileReader = new FileReader();
          fileReader.onloadend = () => {
            const unsafeDataUrl = fileReader.result as string;
            const safeDataUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(unsafeDataUrl);
            this.pdfSrc = safeDataUrl;
          };
          fileReader.readAsDataURL(blob);
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
