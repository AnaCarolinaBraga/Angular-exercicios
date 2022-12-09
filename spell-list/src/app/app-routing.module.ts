import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SpellListComponent } from './pages/spell-list/spell-list.component';

const routes: Routes = [
  { path:"list", component: SpellListComponent },
  { path:"", redirectTo: "list", pathMatch: "full" },
  { path:"**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
