import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';

@Component({
    templateUrl: './signin.component.html',
})
export class SigninComponent implements OnInit {

    loginForm: FormGroup

    constructor(
        public formBuilder: FormBuilder,
        private service: AuthService,
        private router: Router,

    ) {
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
                this.router.navigate(['user', userName]), //se houve login, logo, o userName existe. Então a rota também deverá existir
            err => {
                console.log(err);
                this.loginForm.reset();
            });
    }

}
