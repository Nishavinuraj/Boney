import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {

    signUpForm: FormGroup;
    submitted = false;

    constructor(
        private translate: TranslateService,
        public router: Router,
        public fb: FormBuilder,
        public authService: AuthService,
        public toastr: ToastrService
    ) {
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        //this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');
    }

    ngOnInit() {
        this.signUpForm = this.fb.group({
            full_name: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required],
            retype_password: ['', Validators.required]
        });
    }

    onSignUp(isValid) {

        if (isValid) {
            // localStorage.setItem('isLoggedin', 'true');

            const obj = {
                full_name: this.signUpForm.value.full_name,
                email: this.signUpForm.value.email,
                password: this.signUpForm.value.password,
                retype_password: this.signUpForm.value.retype_password

            };

            this.authService.login(obj).subscribe(res => {
                    this.submitted = false;
                    console.log('>>>>>>>>>UserLogin', res);
                    this.toastr.success('Login Successful.');
                    this.router.navigate(['/login']);
                    // localStorage.setItem('user', 'true');
                }, err => {
                    this.toastr.error('Login Failed');
                    console.log('>>>>>>>>>UserLoginerr', err);
                }
            );
        } else {
            this.submitted = true;
        }
    }
}
