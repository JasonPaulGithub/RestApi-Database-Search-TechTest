import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Project22SharedModule } from 'app/shared/shared.module';
import { Project22CoreModule } from 'app/core/core.module';
import { Project22AppRoutingModule } from './app-routing.module';
import { Project22HomeModule } from './home/home.module';
import { Project22EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Project22SharedModule,
    Project22CoreModule,
    Project22HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Project22EntityModule,
    Project22AppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class Project22AppModule {}
