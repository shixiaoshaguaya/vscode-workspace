import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
//启动浏览器加载AppModule即当前项目的唯一模块根模块
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
