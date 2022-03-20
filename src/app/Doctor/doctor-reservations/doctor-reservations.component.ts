import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorserviceService } from 'src/app/doctorservice/doctorservice.service';

@Component({
  selector: 'app-doctor-reservations',
  templateUrl: './doctor-reservations.component.html',
  styleUrls: ['./doctor-reservations.component.css']
})
export class DoctorReservationsComponent implements OnInit {
  doctorPaitnetsAppiontmets:any[]=[]
  res:any
  filter:any[]=[]

  a:any[]=[1,2,3]
  changed!: any;


  isCancel:boolean=false;

  isFilter:boolean=false;
  canclecor:any
  editIndex!: number;
  index1:any;
  index2:any;
  _Status: string="pending"


  constructor(private _Doctorservic:DoctorserviceService
    ,private router:ActivatedRoute) { }

  patientStatus:FormGroup = new FormGroup({
    status:new FormControl(null , [Validators.required] ),
  }); 
  ngOnInit(): void {
    this._Doctorservic.getDoctorPaitnetsAppiontmets().subscribe((response)=>{
      this.doctorPaitnetsAppiontmets = response;
      this.doctorPaitnetsAppiontmets.sort((a, b) => (a.date < b.date) ? 1 : (a.date === b.date) ? ((a.patientTime < b.patientTime) ? 1 : -1) : -1 )

      console.log(this.doctorPaitnetsAppiontmets);

      if(this.router.snapshot.params['status']=="cancel")
    {
      this.isCancel=true;
      for(let i = 0 ; i<this.doctorPaitnetsAppiontmets.length ; i++)
      {
        if(this.doctorPaitnetsAppiontmets[i].status !="cancel")
      {
        this.doctorPaitnetsAppiontmets.splice(i,1);
        i--;
        //console.log(this.doctorPaitnetsAppiontmets[i].status ,this.doctorPaitnetsAppiontmets.length )
      }
      }
    }
    });
    console.log(this.router.snapshot.params['status']);

    
  }
 

  getIndexChanged(dpa:any)
  {
   // console.log(this.doctorPaitnetsAppiontmets.indexOf(dpa));
    this.editIndex = this.doctorPaitnetsAppiontmets.indexOf(dpa)
    this.changed =null;
    //console.log(this.editIndex);

  }
  changeStatus(patientStatus:any)
  {
    //console.log(patientStatus);

   //console.log(this.allAppiontmets[this.editIndex])
   //this.doctorPaitnetsAppiontmets[this.editIndex].status=patientStatus.status;
   this._Doctorservic.updateStatus(this.doctorPaitnetsAppiontmets[this.editIndex].id,patientStatus).subscribe((response)=>{
    console.log(response.response);
    if(response.response == 'done')
    {
      this.changed = response.response;
    }
    console.log(response);
    this.ngOnInit();
  })
   
   
   
   //console.log(this.doctorPaitnetsAppiontmets)

  }
  filterS(status:any)
  {
    this.isFilter=true;
    //console.log(status);
    let filterArr:any = []
    for(let i = 0 ; i<this.doctorPaitnetsAppiontmets.length ; i++)
    {
      if(this.doctorPaitnetsAppiontmets[i].status==status)
      {
        filterArr.push(this.doctorPaitnetsAppiontmets[i]);
      }
    }
    console.log(filterArr);
    this.filter = filterArr;
  }
  newindexCh(x:any,a:any)
  {
    this.index1=x;
    this.index2=a;
    //console.log(x,a)
  }
  /*C_S(Sstatus:any)
  {
    console.log(Sstatus);
    //this.allAppiontmets[this.index1].reservations[this.index2].status=Sstatus.status
    //console.log(this.allAppiontmets[this.index1].reservations[this.index2].id)
    this._Doctorservic.updateStatus(this.allAppiontmets[this.index1].reservations[this.index2].id,Sstatus).subscribe((response)=>{
      console.log(response);
      window.location.reload();
    })
   //console.log(this.allAppiontmets[this.index1].reservations[this.index2]);
  }*/

  /*filterSS(status:any)
  {
    this.isFilter=true;
    //console.log(status);
    let arr:any = [];
    for(let i = 0 ; i<this.allAppiontmets.length ; i++)
    {
      arr.push(this.allAppiontmets[i])
    }
    for(let i = 0 ; i<arr.length ; i++)
    {
      for(let k = 0 ; k<arr[i].reservations.length ; k++)
      {
        //console.log(this.allAppiontmets[i].reservations[k] ,"dasadasdasd");
        //console.log(k);
        if(arr[i].reservations[k].status!=status)
      {
        //console.log( 1,filterArr[i].reservations[k]);
        arr[i].reservations.splice(k,1);
        k--;
        //filterArr.push(this.allAppiontmets[i]);
      }
      }    
    }
    console.log(arr);
    this.filter = arr;
  }*/
}