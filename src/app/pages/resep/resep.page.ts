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
    // console.log(docId);
    
      this.afs.collection('Resep').doc(docId).ref.get().then((data)=>{
        // this.reseps = data.data()
        this.reseps = ({
                judul :data.data()['judul'],
                gambar :data.data()['gambar'],
                langkah :data.data()['langkah'],
                bahan :data.data()['bahan'],
                id :docId,
              })
      })
      // then(function (data) {
     
      //     // console.log(data.data());
          
      //      this.reseps = ({
      //       judul :data.data()['judul'],
      //       gambar :data.data()['gambar'],
      //       langkah :data.data()['langkah'],
      //       bahan :data.data()['bahan'],
      //       id :docId,
      //     })

          // console.log(this.reseps);
          
        // });
  }

  home() {
    this.router.navigate(['home']);
  }

  }