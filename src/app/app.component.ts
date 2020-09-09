import { Component, HostBinding } from '@angular/core';
import {
  ActivatedRoute,
  ResolveEnd,
  ResolveStart,
  Router,
  RouterEvent,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'ga-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  @HostBinding('className') flexContainer = 'flex flex-1 flex-col';
  activatedRoute: ActivatedRoute | string = '';
  isReferenceDataLoading = false;

  constructor(private readonly router: Router) {
    router.events.subscribe((event) => {
      this.onRouterEvent(event as RouterEvent);
    });
  }

  onRouterEvent(event: RouterEvent): void {
    if (event instanceof ResolveStart) {
      this.isReferenceDataLoading = true;
    } else if (event instanceof ResolveEnd) {
      this.isReferenceDataLoading = false;
    }
  }

  setOutletState(outlet: RouterOutlet): void {
    this.activatedRoute = outlet.isActivated ? outlet.activatedRoute : '';
  }
}
