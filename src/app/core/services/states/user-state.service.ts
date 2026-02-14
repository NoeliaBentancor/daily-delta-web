import { Injectable, WritableSignal, signal } from "@angular/core";
import { User } from "../../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserStateService {
  private user: WritableSignal<User | null> = signal<User | null>(null);

  setUser(user: User) {
    this.user.set(user);
  }

  getUser() {
    return this.user.asReadonly();
  }
}