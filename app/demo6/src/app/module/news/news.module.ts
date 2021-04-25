import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { NewsContentComponent } from './components/news-content/news-content.component';
import { NewsListComponent } from './components/news-list/news-list.component';


@NgModule({
  declarations: [
    NewsComponent,
    NewsContentComponent,
    NewsListComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule
  ],
  exports: [
    NewsComponent
  ]
})
export class NewsModule { }
