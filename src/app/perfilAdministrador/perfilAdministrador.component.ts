import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-perfilAdministrador',
  templateUrl: './perfilAdministrador.component.html',
  styleUrls: ['./perfilAdministrador.component.scss']
})
export class PerfilAdministradorComponent implements OnInit {

  items: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.items = firestore.collection('items').valueChanges();
   }
  ngOnInit() {
  }

}
