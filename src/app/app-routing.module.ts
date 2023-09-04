import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventManagementComponent } from './event-management/event-management.component';
import { ProffessorsComponent } from './proffessors/proffessors.component';
import { CoursesComponent } from './courses/courses.component';
import { StudentsComponent } from './students/students.component';
import { LibrariesComponent } from './libraries/libraries.component';
import { combineLatest } from 'rxjs';
import { DepatmentsComponent } from './depatments/depatments.component';
import { ContactComponent } from './contact/contact.component';
import { LeadsComponent } from './leads/leads.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'',redirectTo:'dashboard',pathMatch:'full'},

  {path:'event-management',component:EventManagementComponent},
  {path:'professors',component:ProffessorsComponent},
  {path:'courses',component:CoursesComponent},
  {path:'students',component:StudentsComponent},
  {path:'libraries',component:LibrariesComponent},
  {path:'departments',component:DepatmentsComponent},
  {path:'contacts',component:ContactComponent},
  {path:'lead',component:LeadsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
