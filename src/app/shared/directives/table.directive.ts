import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appTable]',
  standalone: true,
})
export class TableDirective implements OnInit{

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    (this.elementRef.nativeElement as HTMLTableElement).classList.add('table');
  }
}
