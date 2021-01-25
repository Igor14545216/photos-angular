import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit {

    formulario: FormGroup;

    constructor(
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
}
