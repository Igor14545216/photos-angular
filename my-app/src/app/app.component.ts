import { Component } from '@angular/core';
import { PhotoService } from './photos/photo/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos: any[] = [];

  constructor(private service: PhotoService) { }

  ngOnInit(): void {
    this.service.listFromUser('flavio').subscribe(photos => {
      this.photos = photos;
    });
  }
}
