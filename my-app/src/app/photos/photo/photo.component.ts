import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ap-photo',
  templateUrl: './photo.component.html',
})
export class PhotoComponent implements OnInit {

  @Input() description = '';
  @Input() url = ''

  constructor() { }

  ngOnInit(): void { }
}
