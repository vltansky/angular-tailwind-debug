import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { PortalLayout } from './layouts/portal/portal.layout';
import { PortalRoutingModule } from './portal-routing.module';

@NgModule({
  declarations: [PortalLayout],
  imports: [PortalRoutingModule, SharedModule],
})
export class PortalModule {}
