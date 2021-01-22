import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDarkenOnHover]'
})
export class DarkenOnHoverDirective {

  //ElementRef: elemento do DOM a qual esta diretiva está relacionada. Para manipular o DOM.
  //@HostListener: para poder passar o evento 

  constructor(
    private el: ElementRef,
    private render: Renderer2) { }


  @HostListener('mouseover')
  darkenOn() {
    // this.el.nativeElement vou pegar o elemento nativo de onde está a minha diretiva
    this.render.setStyle(this.el.nativeElement, 'filter', 'brightness(70%)');
  }

  @HostListener('mouseleave')
  darkenOff() {
    this.render.setStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
  }

}
