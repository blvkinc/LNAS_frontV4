import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { AuthDataService } from './auth-data.service';

@Directive({
  selector: '[hasRole]',
})
export class HasRoleDirective {
  @Input('hasRole') roles: string[];

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private authDataService: AuthDataService
  ) {}

  ngOnInit() {
    const storedRole = this.authDataService.getUserRole();

    if (!this.roles.includes(storedRole)) {
      this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'none');
    }
  }
}
