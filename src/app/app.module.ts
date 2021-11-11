import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArticlePipePipe } from './article-pipe.pipe';
import {TabViewModule} from "primeng/tabview";
import {TableModule} from "primeng/table";
import {ChartModule} from "primeng/chart";

@NgModule({
  declarations: [
    AppComponent,
    ArticlePipePipe
  ],
  imports: [
    BrowserModule,
    TabViewModule,
    TableModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
