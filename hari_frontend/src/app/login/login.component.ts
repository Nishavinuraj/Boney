import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { routerTransition } from '../router.animations';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
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
        this.loginForm = this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
        localStorage.removeItem('access_token');
    }

    onLoggedin(isValid) {

        if (isValid) {
            const obj = {
                username: this.loginForm.value.username,
                password: this.loginForm.value.password
            };

            this.authService.login(obj).subscribe((res: any) => {
                    this.submitted = false;
                    if(res.data){
                        localStorage.setItem('user', JSON.stringify(res.data));
                        localStorage.setItem('access_token', res.data.token);
                        localStorage.setItem('account_type', res.data.role);
                        this.toastr.success('Login Successful.');
                        if (res.data.role === 'ADMIN') {
                            // this.router.navigate(['/dashboard']);
                            this.router.navigate(['/blank-page']);
                        } else {
                            this.router.navigate(['/blank-page']);
                        }
                    } else {
                        this.toastr.error(res.message);
                    }
                }, err => {
                    this.toastr.error('Login Failed');
                    this.router.navigate(['/login']);
                    console.log('>>>>>>>>>UserLoginerr', err);
                }
            );
        } else {
            this.submitted = true;
        }
    }
}
