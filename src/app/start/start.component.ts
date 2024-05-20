import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html'
})

export class StartComponent implements OnInit {

  constructor(
    private router: Router,
    private renderer: Renderer2,
    private el: ElementRef,
  ){}

  ngOnInit(): void {
    this.mouseMovement();
  }

  start(): void {
    this.router.navigate(['/characters']);
  }

  mouseMovement(): void {
    this.renderer.listen(this.el.nativeElement, 'mousemove', (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      const image = document.getElementById('main-image');
      const rekt = image?.getBoundingClientRect();
      const imageX = (rekt?.left || 0) + (rekt?.width || 0) / 2;
      const imageY = (rekt?.top || 0) + (rekt?.height || 0) / 2;

      const angleDeg = this.angle(mouseX, mouseY, imageX, imageY);

      const eyes: HTMLElement[] = Array.from(document.querySelectorAll('.eye')) as HTMLElement[];


      eyes.forEach((eye: HTMLElement) => {
        eye.style.transform = `rotate(${90 + angleDeg}deg)`;
      });
    });
  }

  angle(cx: number, cy: number, ex: number, ey: number): number {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = rad * 180 / Math.PI;
    return deg;
  }

}
