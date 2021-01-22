import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit, OnDestroy {

  @Output() onTyping = new EventEmitter<string>()
  debounce: Subject<any> = new Subject<any>();

  constructor() { }

  ngOnInit(): void {

    this.debounce.pipe(debounceTime(300)).subscribe(filter => {
      this.onTyping.emit(filter)
    });
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

}
