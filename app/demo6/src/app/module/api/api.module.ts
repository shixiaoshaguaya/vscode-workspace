import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiRoutingModule } from './api-routing.module';
import { ApiComponent } from './api.component';
import { QuestionaiComponent } from './questionai/questionai.component';
import { WuliuComponent } from './wuliu/wuliu.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ApiComponent,
    QuestionaiComponent,
    WuliuComponent
  ],
  imports: [
    CommonModule,
    ApiRoutingModule,
    FormsModule
  ],
  exports: [
    ApiComponent
  ]
})
export class ApiModule { }
