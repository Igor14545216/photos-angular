import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SigninComponent } from './signin/signin.component';
import { VmessageModule } from '../shared/components/vmessage/vmessage.module';
import { SignupComponent } from './signup/signup.component';

@NgModule({
    declarations: [
        SigninComponent, 
        SignupComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        VmessageModule, 
        RouterModule, 
        FormsModule,
    ],
    exports: [],
    providers: [],
})
export class HomeModule { }