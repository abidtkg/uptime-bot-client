import { Component } from '@angular/core';
import { APP_NAME } from '../../../../app.config';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {
    
    public APP_NAME: string = APP_NAME;
    public email: string = '';
    public password: string = '';
    public isProcessing: boolean = false;

    login(){}

    forgetPassword(){}
}
