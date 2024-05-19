import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class InputService {

  constructor(@Inject(DOCUMENT) private document: any) {

  }

  showLoading(): void {
    let el = this.document.createElement('div');
    el.classList.add('spinner-border', 'show');
    (this.document.getElementsByTagName('body')[0]).appendChild(el);
  }

  hideLoading(): void {
    let el = this.document.getElementsByClassName('spinner-border')[0];
    if (el) {
      el.remove();
    }
  }


}
