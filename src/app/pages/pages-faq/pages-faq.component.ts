import {Component, OnInit} from '@angular/core';
import {DashboardResourceService} from 'src/app/api/services';

@Component({
  selector: 'app-pages-faq',
  templateUrl: './pages-faq.component.html',
  styleUrls: ['./pages-faq.component.css'],
})
export class PagesFaqComponent implements OnInit {
  monthlyProduction: number;

  constructor(private dashboardService: DashboardResourceService) { }

  ngOnInit(): void {
    this.getMonthlyProduction();
  }

  getMonthlyProduction(): void {
    this.dashboardService.getMonthlyProduction1().subscribe({
      next: (monthlyProduction: number) => {
        this.monthlyProduction = monthlyProduction;
      },
      error: (error) => {
        console.error('Error fetching total count:', error);
      },
    });
  }

  sendEmail(): void {
    const email = 'lankanaturalagriservices@gmail.com';
    const subject = 'Regarding your inquiry';
    const name = (<HTMLInputElement>document.getElementById('inputName')).value;
    const userEmail = (<HTMLInputElement>document.getElementById('inputEmail')).value;
    const message = (<HTMLTextAreaElement>document.getElementById('inputMessage')).value;

    const body = `Hello,\n\nI have some questions and would like to inquire about your services.\n\nName: ${name}\nEmail: ${userEmail}\nMessage: ${message}\n\nBest regards,`;

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  }

}
