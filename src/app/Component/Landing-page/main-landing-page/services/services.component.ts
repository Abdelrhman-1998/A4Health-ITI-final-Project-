
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Icon } from 'src/app/Models/icon';
import { Specialty } from 'src/app/Models/specialty';
import { SpecialtiesService } from 'src/app/Services/specialties.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
  // [x: string]: any;
  icons:Icon[];
  specialties: Specialty[] = [];
  specialIcon:Icon[]=[]
  specialtyId!:number
  // router: any;
  constructor(
    private httpClient: HttpClient,
    private specialityServices: SpecialtiesService,
    private router:Router
  ) {
    this.icons=[
      { icon:'fa-solid fa-heart-pulse',name:'Cardiology and Chest'},
      { icon:'fa-solid fa-tooth',name:'Dentistry'},
      { icon:'fa-solid fa-brain',name:'Neurological Treatment'},
      { icon:'fa-solid fa-baby',name:'Pediatrics and New Born'},
      { icon:'fa-solid fa-hand-dots',name:'Dermatology (skin)'},
      { icon:'fa-solid fa-heart',name:'Psychiatry'},
      { icon:'fa-solid fa-bone',name:'Othopedics(Bones)'},
      { icon:'fa-solid fa-ear-deaf',name:'Ear,Nose and Throat'},
      { icon:'fa-solid fa-venus',name:'Gynaecology and Infertility'}
    ]
  }
  

  ngOnInit(): void {
    // this.getAllSpecialities()
  }
  // getAllSpecialities() {
  //   let x:string
  //   this.specialityServices.getAllSpecialties().subscribe((spe) => {
  //     spe.forEach(spe => {
  //       this.icons.forEach(i=>{
          
  //           this.specialIcon.push(i) ; 
  //       })
  //       this.specialtyId=spe.id
  //     }
  //     );
      
  //     console.log(this.specialIcon);
      
  //     this.specialties = spe;
  //   });
  // }
  sendSpecialtyId(id:number){
    // this.router.navigate(['/search'],{queryParams:{id}})
  }
  // Owl Plugin

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },

      1000: {
        items: 4
      }
    },
    nav: true
  }
  
  


}
