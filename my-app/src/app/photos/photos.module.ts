import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotosComponent } from './photo-list/photos/photos.component';
import { FilterByDescription } from './photo-list/filter-by-description.pipe';
import { LoadButtonComponent } from './photo-list/load-button/load-button.component';
import { CardModule } from '../shared/components/card/card.module';
import { SearchComponent } from './photo-list/search/search.component';
import { DarkenOnOverModule } from '../shared/diretivas/darken-on-over/darken-on-hover.module';

@NgModule({
    declarations: [
        PhotoComponent,
        PhotoListComponent,
        PhotoFormComponent,
        PhotosComponent, 
        FilterByDescription, 
        LoadButtonComponent, 
        SearchComponent
    ],
    imports: [
        CommonModule, 
        HttpClientModule, 
        CardModule, 
        DarkenOnOverModule,
    ],
    providers: [],
})
export class PhotosModule { }