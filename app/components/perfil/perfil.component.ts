import { Component } from '@angular/core';
import {Auth} from '../../services/auth.service';

@Component({
  moduleId: module.id,
  selector: 'perfil',
  templateUrl: 'perfil.component.html'
})
export class PerfilComponent { 
	constructor(private auth:Auth){
        
    }
}
