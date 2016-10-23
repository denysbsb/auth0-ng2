import { Component } from '@angular/core';
import {Auth} from '../../services/auth.service';

@Component({
  moduleId: module.id,
  selector: 'perfil',
  templateUrl: 'perfil.component.html'
})
export class PerfilComponent { 
	perfil:any;
	constructor(private auth:Auth){
         this.perfil = JSON.parse(localStorage.getItem('profile'));
        console.log(this.perfil);
    }

}
