import {Injectable} from '@angular/core';
import {DexieService} from '../classes/dexie.service';

@Injectable()
export class IndexedDbService {

    constructor(private dexieService: DexieService) {}

    addOneFriend() {
        this.dexieService.addOne('friends',{first_name: 'Rounak',last_name: 'Baral',age: 21});
    }
    
}