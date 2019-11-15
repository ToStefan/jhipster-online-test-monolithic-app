import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterOnlineTestMonolithicAppSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [JhipsterOnlineTestMonolithicAppSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class JhipsterOnlineTestMonolithicAppHomeModule {}
