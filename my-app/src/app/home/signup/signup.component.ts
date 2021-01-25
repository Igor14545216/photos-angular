import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { SignUpService } from './signup.service';
import { NewUser } from './new-user';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit {

    formulario: FormGroup;

    constructor(
        private router: Router,
        private service: SignUpService,
        private fb: FormBuilder,
        private userNotTakenValidatorService: UserNotTakenValidatorService) {

        this.formulario = this.fb.group({
            email: ['',
                [
                    Validators.required,
                    Validators.email
                ]
            ],
            fullName: ['',
                [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(40)
                ]
            ],
            userName: ['',
                [
                    Validators.required,
                    lowerCaseValidator,
                    Validators.minLength(2),
                    Validators.maxLength(30)
                ],
                this.userNotTakenValidatorService.checkUserNameTaken(),
            ],
            password: ['',
                [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(14)
                ]
            ]
        })
    }

    ngOnInit(): void { }

    signup(e: any) {
        const newUser = this.formulario.getRawValue() as NewUser;
        this.service.signup(newUser).subscribe(() => {
            this.router.navigate(['']);
        },
            err => {
                console.log(err);
                
            }
        )
    }
}
