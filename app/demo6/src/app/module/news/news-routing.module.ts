import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NewsComponent } from './news.component';

const routes: Routes = [
  {
    path: '', component: NewsComponent,
    children: [
      { path: 'list', component: NewsListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
