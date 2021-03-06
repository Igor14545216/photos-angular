import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  filter: string = '';
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: PhotoService) { }

  ngOnInit() {
    this.userName = this.activatedRoute.snapshot.params.userName;
    this.photos = this.activatedRoute.snapshot.data['photos'];
  }

  onTyping(event: any) {
    this.filter = event.target.value;
  }

  load() {
    this.service.listFromUserPaginated(this.userName, ++this.currentPage).subscribe(photos => {
        this.photos = this.photos.concat(photos)
        if (!photos.length) this.hasMore = false;
      });
  }

}
