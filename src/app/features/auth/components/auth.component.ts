import { Component, inject } from "@angular/core";
import { FormBuilder, ReactiveFormsModule} from "@angular/forms";
import { Router } from "@angular/router";
import { GoogleSignInComponent } from "../../google-auth/components/google-auth.component";
@Component({
    selector: "app-auth",
    templateUrl: "./auth.component.html",
    imports: [ReactiveFormsModule, GoogleSignInComponent],
})
export class AuthComponent {
    private readonly formBuilder = inject(FormBuilder);
    private readonly routerService = inject(Router);

    loginForm = this.formBuilder.group({
        email: [''],
        password: ['']
    });

    login() {
        if (this.loginForm.valid) {
            const { email, password } = this.loginForm.value;
            this.routerService.navigate(['/tracker']);
            //TODO: Implement authentication logic
        }
    }

}