import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SigninComponent } from './signin/signin.component';
import { VmessageModule } from '../shared/components/vmessage/vmessage.module';

@NgModule({
    declarations: [SigninComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        VmessageModule, 
        RouterModule
    ],
    exports: [],
    providers: [],
})
export class HomeModule { }