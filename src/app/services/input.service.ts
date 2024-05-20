import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class InputService {

  constructor(@Inject(DOCUMENT) private document: any) {

  }

  showLoading(): void {
    if (!this.document.querySelector('.spinner-border')) {
      let el = this.document.createElement('div');
      el.classList.add('spinner-border', 'show');
      el.style.position = 'fixed';
      el.style.top = '50%';
      el.style.left = '50%';
      el.style.transform = 'translate(-50%, -50%)';
      this.document.body.appendChild(el);
    }
  }

  hideLoading(): void {
    let el = this.document.querySelector('.spinner-border');
    if (el) {
      el.remove();
    }
  }

}
