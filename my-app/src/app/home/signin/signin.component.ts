import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';

@Component({
    templateUrl: './signin.component.html',
})
export class SigninComponent implements OnInit {

    loginForm: FormGroup

    constructor(
        public formBuilder: FormBuilder,
        private service: AuthService) {
        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        })
    }

    ngOnInit(): void { }
    
    login() {
        const userName = this.loginForm.controls.userName.value;
        const password = this.loginForm.controls.password.value;

        this.service.authenticate(userName, password).subscribe(
            () =>
                console.log('autenticado'),
            err => {
                console.log(err);
                this.loginForm.reset();
            });
    }

}
