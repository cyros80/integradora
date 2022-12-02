import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guia',
  templateUrl: './guia.page.html',
  styleUrls: ['./guia.page.scss'],
})
export class GuiaPage implements OnInit {
//Opciones del Slide
  opcionesSlide={
   slidesPerView:1.1,
    freeMode:true,
  }

  constructor() { }

  ngOnInit() {
  }

}
