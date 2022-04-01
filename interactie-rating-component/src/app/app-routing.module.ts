import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HowDidWeDoComponent } from './how-did-we-do/how-did-we-do.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

const routes: Routes = [{
  path:'',
  component: HowDidWeDoComponent
},
{
  path:'thankyou',
  component: ThankYouComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
