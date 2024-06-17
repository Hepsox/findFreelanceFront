import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllFreelanceComponent } from './all-freelance/all-freelance.component';

export const routes: Routes = [
  { path: 'freelances', component: AllFreelanceComponent },
  { path: 'booking/freelance/:id', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
