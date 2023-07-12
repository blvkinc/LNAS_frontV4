import {Component, Inject} from '@angular/core';
import {CommonModule, DOCUMENT} from '@angular/common';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import { SecurityModule } from 'src/app/security/security.module';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet,SecurityModule],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  user = JSON.parse(localStorage.getItem('auth') || '{}');

  constructor(@Inject(DOCUMENT) private document: Document, private router: Router) { }

  sidebarToggle() {
    this.document.body.classList.toggle('toggle-sidebar');
  }

  onSignOut() {
    localStorage.removeItem('auth');
    this.router.navigate(['/']);
  }
}
