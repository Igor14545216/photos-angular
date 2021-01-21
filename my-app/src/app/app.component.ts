import { Component } from '@angular/core';
import { PhotoService } from './photos/photo/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos: object[] = [];

  constructor(service: PhotoService) {

    service.listaFhotos('flavio').subscribe(resp => this.photos = resp);

  }
}
