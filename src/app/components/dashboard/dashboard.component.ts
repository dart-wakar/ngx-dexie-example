import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html'
})

export class DashboardComponent {

    page: any = 'Dashboard';

    constructor(private router: Router) {}

    goToHome() {
        this.router.navigate(['/home']);
    }

    addFriend() {
        
    }

    addTeacher() {
        
    }

}