import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';

@Component({
    templateUrl: './signin.component.html',
})
export class SigninComponent implements OnInit {

    @ViewChild('userNameInput') userNameInput!: ElementRef<HTMLInputElement>;
    loginForm: FormGroup;

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
        console.log(this.userNameInput);

        const userName = this.loginForm.controls.userName.value;
        const password = this.loginForm.controls.password.value;

        this.service.authenticate(userName, password).subscribe(
            () =>
                this.router.navigate(['user', userName]),
            err => {
                this.userNameInput.nativeElement.focus();
                this.loginForm.reset();
            });
    }

}
