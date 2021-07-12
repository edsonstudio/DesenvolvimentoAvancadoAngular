// ---------------Angular---------------
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ---------------Components---------------
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

// ---------------Services---------------

// ---------------Angular material---------------

// ---------------Sub-modules---------------
import { AdminRoutingModule } from './admin.route';

// ---------------Validation modules---------------

@NgModule({
  declarations: [
    AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  providers: [],
  exports: []
})
export class AdminModule { }
