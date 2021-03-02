import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Test5SharedModule } from 'app/shared/shared.module';
import { Test5CoreModule } from 'app/core/core.module';
import { Test5AppRoutingModule } from './app-routing.module';
import { Test5HomeModule } from './home/home.module';
import { Test5EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Test5SharedModule,
    Test5CoreModule,
    Test5HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Test5EntityModule,
    Test5AppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class Test5AppModule {}
