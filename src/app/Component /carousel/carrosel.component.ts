import { Component, Input, OnInit } from '@angular/core';

export interface CarroselImage {
  imageSrc: string;
  imageAlt: string;
  description: string;
}

@Component({
  selector: 'app-carrosel',
  templateUrl: './carrosel.component.html',
  styleUrls: ['./carrosel.component.css']
})
export class CarroselComponent implements OnInit {

  @Input() images: CarroselImage[] = [];
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 3000;

  selectedIndex: number = 0;

  constructor() { }

  ngOnInit(): void {

    if (this.autoSlide){
      this.autoSliderImages();
    }
  }
  autoSliderImages(): void {
    setInterval(() => {
      this.onNextClick();
    },this.slideInterval);
  }



  selectImage(index: number): void {
    this.selectedIndex = index;
  }

  onPrevClick(): void {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.images.length - 1;
    } else { this.selectedIndex-- }
  }

  onNextClick(): void {
    if (this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    } else { this.selectedIndex++; }
  }
}