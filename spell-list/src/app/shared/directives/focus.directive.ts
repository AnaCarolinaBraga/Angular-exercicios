import { Directive, ElementRef } from "@angular/core";


@Directive({
    selector: "[ccFocus]"
})
export class FocusDirective{
    constructor(private el: ElementRef){
        this.el.nativeElement.style.backgroundColor = '#F7F7F7';

        el.nativeElement.addEventListener('mouseover', () => {
            this.el.nativeElement.style.backgroundColor = '#D8D8D8';
          })
      
          el.nativeElement.addEventListener('mouseleave', () => {
            this.el.nativeElement.style.backgroundColor = '#F7F7F7';
          })

    }
}