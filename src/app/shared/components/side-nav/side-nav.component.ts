import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, HostBinding, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { tailwindConfig } from '../../utilities/tailwind/tailwind-config.utility';

@Component({
  selector: 'ga-side-nav',
  templateUrl: './side-nav.component.html',
})
export class SideNavComponent implements OnDestroy {
  @HostBinding('className') flexContainer = 'flex flex-1 flex-col';

  activatedRoute: ActivatedRoute | string = '';

  isMinimized = true;
  isAnimFinished = true;
  isMobile = false;

  constructor(private readonly breakpointObserver: BreakpointObserver) {
    this.breakpoint$ = this.breakpointObserver
      .observe([`(max-width : ${tailwindConfig.theme.screens.sm})`])
      .subscribe((result) => {
        console.log(result);
      });
  }

  private readonly breakpoint$: Subscription;

  ngOnDestroy(): void {
    this.breakpoint$.unsubscribe();
  }
}
