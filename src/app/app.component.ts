import { 
  Component,
  ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  mdq: MediaQueryList;
  mivalor:boolean=false;
  mediaQueryListener:()=>void;

  constructor( changeDetectorRef: ChangeDetectorRef, media: MediaMatcher ) {
    this.mdq = media.matchMedia('(max-width: 600px)');
    this.mediaQueryListener = () => {
      changeDetectorRef.detectChanges();
      console.log("Match?: ", this.mdq.matches);
      if (this.mdq.matches){
        this.mivalor=true
      }else this.mivalor=false;
      }     
    this.mdq.addListener(this.mediaQueryListener);
  }
}