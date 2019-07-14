import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FeedComponent } from './components/feed/feed.component';
import { ConfigComponent } from './config/config.component';

import { FeedService } from './components/feed/feed.service';
import { ConfigService } from './config/config.service';


export function init_app(configService: ConfigService) {
  return () => configService.getConfig();
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeedComponent,
    ConfigComponent,
    


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ConfigService, { provide: APP_INITIALIZER, useFactory: init_app, deps: [ConfigService], multi: true },
    FeedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
