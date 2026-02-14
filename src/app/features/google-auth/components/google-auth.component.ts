import { Component, OnInit, NgZone, inject } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { UserStateService } from '../../../core/services/states/user-state.service';
import { User } from '../../../core/models/user.model';

@Component({
    selector: 'app-google-sign-in',
    templateUrl: './google-auth.component.html',
})
export class GoogleSignInComponent implements OnInit {
    private readonly ngZone = inject(NgZone);
    private readonly router = inject(Router);
    private readonly userStateService = inject(UserStateService);

    ngOnInit(): void {
        this.initializeGoogleSignIn();
    }

    initializeGoogleSignIn() {
        google.accounts.id.initialize({
            client_id: environment.googleClientId,
            callback: (data: google.accounts.id.CredentialResponse) => this.handleCredentialResponse(data)
        });

        google.accounts.id.renderButton(
            document.getElementById('google-signin-button') as HTMLElement,
            {
                theme: 'outline', size: 'medium', logo_alignment: 'center', type: 'standard',
                width: 380, locale: 'en-US'
            }
        );

        google.accounts.id.prompt();
    }

    handleCredentialResponse(data: google.accounts.id.CredentialResponse) {
        this.ngZone.run(() => {
            fetch(`${environment.apiUrl}auth/google/userinfo`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: data.credential
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }

                    return response.json();
                })
                .then(user => {
                    console.log('User information:', user);

                    const userToSave: User = {
                        name: user.name,
                        email: user.email,
                        picture: user.picture
                    };
                    this.userStateService.setUser(userToSave);
                    this.router.navigate(['/tracker']);
                })
                .catch(error => {
                    console.error('Error during Google Sign-In:', error);
                });
        });
    }

}