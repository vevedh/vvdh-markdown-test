import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ObserversModule } from '@angular/cdk/observers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatDividerModule
} from '@angular/material';
import { MarkdownModule } from './markdown/markdown.module';
import { 
  PrismCppModule,
  PrismTsModule,
  PrismScssModule 
} from './prism/languages';
import { AppComponent } from './app.component';

@NgModule({
  imports: [   
    BrowserModule, 
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    ObserversModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MarkdownModule.init({ commonmark: true, footnotes: true }),
    PrismCppModule,
    PrismTsModule,
    PrismScssModule
  ],
  
  declarations: [ 
    AppComponent
  ],

  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
