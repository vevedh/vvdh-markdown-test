import { Component, Inject, OnInit, HostBinding } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatIconRegistry } from '@angular/material';
import { Observable, Subject } from 'rxjs';
import { filter, catchError, switchMap, startWith, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { 

  readonly document$: Observable<string>;
  private editor$ = new Subject<string>();
  public editMode = false;

  constructor(@Inject(DOCUMENT) private document: Document, private http: HttpClient, private icon: MatIconRegistry) {

    this.document$ = this.loadDocument('assets/source.md').pipe( 
      switchMap( source => this.editor$.pipe( 
        startWith(source), 
        debounceTime(500) 
      ))
    );
  }

  private loadDocument(path: string) {    
    return this.http.get(path, { responseType: 'text' } ); 
  }

  public navigate(url: string) {
    console.log(url);
  }

  public scroll(top: number) {
    // Seeks for the element containing the data-line attribute corresponding to the source top line
    const el = this.document.querySelector(`[data-line="${Math.round(top / 18)}"]`);
    // Scrolls the element into the view when possible
    if(!!el) { el.scrollIntoView(); }
  }

  public renderingDone() {
    console.log('Rendering done');
  }
}
