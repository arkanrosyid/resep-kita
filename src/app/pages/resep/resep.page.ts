import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-resep',
  templateUrl: './resep.page.html',
  styleUrls: ['./resep.page.scss'],
})
export class ResepPage implements OnInit {
  private id;
  reseps: any;
  constructor(
    private router: Router,
    private afs: AngularFirestore,
    private activatedRoute: ActivatedRoute) 
    {
      this.activatedRoute.paramMap.subscribe((data)=>{
        // console.log(data);
        this.id = data;
      })
    }

  ngOnInit() {
    this.getResep();
  }
  async getResep(){
    let docId = this.id.params.id;
    console.log(docId);
    
      this.afs.collection('Resep').doc(docId).ref.get().then(function (data) {
        if (data.exists) {
         this.reseps = {
          gambar : data['gambar'],
          judul : data['judul'],
         }
          console.log(data.data());
        } else {
          console.log("There is no document!");
        }
      }).catch(function (error) {
        console.log("There was an error getting your document:", error);
      });}
      
    
  

  home() {
    this.router.navigate(['home']);
  }

  }