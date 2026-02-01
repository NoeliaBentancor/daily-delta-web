import { Component, inject } from "@angular/core";
import { FormBuilder, ReactiveFormsModule} from "@angular/forms";
import { Router } from "@angular/router";
import { InputTextModule } from 'primeng/inputtext';
@Component({
    selector: "app-auth",
    templateUrl: "./auth.component.html",
    imports: [ReactiveFormsModule],
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
            this.routerService.navigate(['/home']);
            //TODO: Implement authentication logic
        }
    }

}