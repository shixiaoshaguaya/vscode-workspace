import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'product', loadChildren: () => import("./module/product/product.module").then(mod => mod.ProductModule) },
  { path: 'news', loadChildren: () => import("./module/news/news.module").then(mod => mod.NewsModule) },
  { path: 'user', loadChildren: () => import("./module/user/user.module").then(mod => mod.UserModule) },
  { path: 'api', loadChildren: () => import("./module/api/api.module").then(mod => mod.ApiModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
