import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.page.html',
  styleUrls: ['./user-edit.page.scss'],
})
export class UserEditPage implements OnInit {
  users: any;

  private email;
  private docId;
  constructor(
    private router: Router,
    private angularFireAuth :AngularFireAuth,
    private afs :AngularFirestore
    ) {}

  ngOnInit() {
    this.getUser();
  }

  async getUser(){
     this.email = await this.angularFireAuth.currentUser.then(
      (data) => data.email
    );
    this.afs
      .collection('Users', (ref) => ref.where('email', '==', this.email))
      .snapshotChanges()
      .subscribe((data) => {
       
        this.users = data.map((e) => ({
          email: e.payload.doc.data()['email'],
          nama: e.payload.doc.data()['name'],
          kemampuan: e.payload.doc.data()['kemampuan'],
          doc: e.payload.doc.id,
        }));
        this.docId = this.users[0].doc;
        // console.log(this.docId);
      });

    
      
  }
  
  async edit(){
    var nama = (document.getElementById('name') as HTMLInputElement).value
    var kemampuan = (document.getElementById('kemampuan') as HTMLInputElement).value
    console.log(this.email);
    console.log(nama);
    console.log(kemampuan);
    
    
    const user = this.afs.collection('Users').doc('/' + this.docId)
    user.update({name : nama})
    user.update({kemampuan : kemampuan})
    this.router.navigate(['user']);
  }

  user() {
    this.router.navigate(['user']);
  }
}
