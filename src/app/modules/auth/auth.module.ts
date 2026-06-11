import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgetComponent } from './pages/forget/forget.component';
import { AuthService } from './services/auth.service';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButton } from '@angular/material/button';

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
        ForgetComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        MatCardModule,
        MatFormFieldModule,
        FormsModule,
        MatProgressBarModule,
        MatButton,
        MatInputModule
    ],
    providers: [
        AuthService
    ]
})
export class AuthModule { }
