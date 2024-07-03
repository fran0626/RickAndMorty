import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class InputService {

  private overlayElement!: HTMLElement;

  constructor(@Inject(DOCUMENT) private document: any) {}

  showLoading(): void {
    if (!this.overlayElement) {
      this.overlayElement = this.document.createElement('div');
      this.overlayElement.classList.add('loading-overlay');

      let spinner = this.document.createElement('div');
      spinner.classList.add('spinner-border', 'show');
      spinner.style.position = 'absolute';
      spinner.style.top = '50%';
      spinner.style.left = '50%';
      spinner.style.transform = 'translate(-50%, -50%)';
      this.overlayElement.appendChild(spinner);

      this.document.body.appendChild(this.overlayElement);
    }
  }

  hideLoading(): void {
    if (this.overlayElement && this.overlayElement.parentElement) {
      this.overlayElement.parentElement.removeChild(this.overlayElement);
      this.overlayElement = null!;
    }
  }
}
