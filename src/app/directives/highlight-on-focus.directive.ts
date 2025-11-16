import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlightOnFocus]'
})
export class HighlightOnFocusDirective {

  @Input() appHighlightOnFocus = '';

  constructor(private el: ElementRef) { }

  @HostListener('focusin') onFocus() {
    this.highlight(this.appHighlightOnFocus || 'hotpink');
  }

  @HostListener('focusout') onUnfocus() {
    this.highlight('rebeccapurple');
  }

  private highlight(color: string){
    this.el.nativeElement.style.outlineColor = color;
  }

}
