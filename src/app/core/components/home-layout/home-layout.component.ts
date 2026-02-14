import { Component, inject } from "@angular/core";
import { Router, RouterOutlet } from "@angular/router";
import { AvatarModule } from 'primeng/avatar';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from "primeng/api";
import { UserStateService } from "../../services/states/user-state.service";
@Component({
    selector: "app-home-layout",
    templateUrl: "./home-layout.component.html",
    standalone: true,
    imports: [RouterOutlet, AvatarModule, MenuModule, ButtonModule],
})
export class HomeLayoutComponent {
    private readonly routerService = inject(Router);
    readonly  userStateService = inject(UserStateService);
    avatarError = false;
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            { label: 'New', icon: 'pi pi-plus' },
            { label: 'Logout', icon: 'pi pi-sign-out', command: () => this.logout() }
        ];
    }
   

    navigateToProfile() {
        // Implement navigation to profile
    }

    navigateToSettings() {
        // Implement navigation to settings
    }

    logout() {
        this.routerService.navigate(['/auth']);
    }
}