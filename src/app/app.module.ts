import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { ToolboxListingComponent } from './toolbox-listing/toolbox-listing.component';
import { ProductDatabaseComponent } from './product-database/product-database.component';
import { ProductDatabase1Component } from './product-database1/product-database1.component';
import { ProductTrackerComponent } from './product-tracker/product-tracker.component';
import { OpportunityFinderComponent } from './opportunity-finder/opportunity-finder.component';
import { CategoryTrendsComponent } from './category-trends/category-trends.component';
import { SupplierDatabaseComponent } from './supplier-database/supplier-database.component';
import { SupplierTrackerComponent } from './supplier-tracker/supplier-tracker.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    ToolboxComponent,
    ToolboxListingComponent,
    ProductDatabaseComponent,
    ProductDatabase1Component,
    ProductTrackerComponent,
    OpportunityFinderComponent,
    CategoryTrendsComponent,
    SupplierDatabaseComponent,
    SupplierTrackerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
