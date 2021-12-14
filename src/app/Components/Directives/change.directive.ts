import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChange]'
})
export class ChangeDirective {

  @Input() isCorrect:boolean=false;

  constructor(private el:ElementRef,private render:Renderer2) { }
  @HostListener('click')answer(){
    if(this.isCorrect){
      this.render.setStyle(this.el.nativeElement,'background','lightgreen')
      this.render.setStyle(this.el.nativeElement,'color','whitesmoke')
      this.render.setStyle(this.el.nativeElement,'border','2px solid orangered')
    }else{
      this.render.setStyle(this.el.nativeElement,'border','blue')
      this.render.setStyle(this.el.nativeElement,'color','red')
      this.render.setStyle(this.el.nativeElement,'border','2px solid orangered')
    }
  }

}
