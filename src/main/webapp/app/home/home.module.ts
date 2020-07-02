import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Project22SharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [Project22SharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class Project22HomeModule {}
