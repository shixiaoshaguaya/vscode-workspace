import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from './api.component';
import { QuestionaiComponent } from './questionai/questionai.component';
import { WuliuComponent } from './wuliu/wuliu.component';

const routes: Routes = [
  {
    path: "", component: ApiComponent,
    children: [
      { path: "wuliu", component: WuliuComponent },
      { path: "question", component: QuestionaiComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApiRoutingModule { }
