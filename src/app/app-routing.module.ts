import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntityViewComponent } from './components/entity-view/entity-view.component';

const routes: Routes = [
  { path: 'context/:entity', component: EntityViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
