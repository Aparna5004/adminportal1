import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "toolbox", component: ToolboxComponent },
  { path: "toolbox-listing", component: ToolboxListingComponent },
  { path: "product-database", component: ProductDatabaseComponent },
  { path: "product-database1", component: ProductDatabase1Component },
  { path: "product-tracker", component: ProductTrackerComponent },
  { path: "opportunity-finder", component: OpportunityFinderComponent },
  { path: "category-trends", component: CategoryTrendsComponent },
  { path: "supplier-database", component: SupplierDatabaseComponent },
  { path: "supplier-tracker", component: SupplierTrackerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
