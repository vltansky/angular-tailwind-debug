import { Component, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ga-portal-layout',
  templateUrl: './portal.layout.html',
})
export class PortalLayout {
  @HostBinding('className') flexContainer = 'flex flex-col flex-1';
  activatedRoute: ActivatedRoute | string = '';
}
