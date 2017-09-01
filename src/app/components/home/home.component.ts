import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {IndexedDbService} from '../../services/indexedDb.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})

export class HomeComponent {

    page: any = 'Home';

    constructor(private router: Router,private indexedDbService: IndexedDbService) {}

    goToDashboard() {
        this.router.navigate(['/dashboard']);
    }

    addFriend() {
        this.indexedDbService.addOneFriend();
    }

    addTeacher() {
        
    }

    getFriendCount() {
        
    }
    
}