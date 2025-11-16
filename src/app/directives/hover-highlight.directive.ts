import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]'
})
export class HoverHighlightDirective {

  @Input() appHoverHighlight = '';
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHoverHighlight || 'yellow'); // default colour
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.highlight('');
  }

  private highlight(color: string){
    this.el.nativeElement.style.backgroundColor = color;
  }

}
