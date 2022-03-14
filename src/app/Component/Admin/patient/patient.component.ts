import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/Models/patient';
import { PatientsService } from 'src/app/Services/patients.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patients:Patient[]=[]
  status=''
  p: number = 1;
  count: number = 5;
  constructor(
    private patientService:PatientsService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.getAllPatients()
  }
  getAllPatients(){
    this.patientService.getAllPatients().subscribe(
      (patient)=>{
        this.patients=patient
        console.log(patient);
        
      }
    )
  }
  delete(id:number){
    this.patientService.deletePatientByID(id).subscribe(() => this.status = 'Delete successful')
    // window.location.reload();
    // setTimeout(()=>{
    //   this.router.navigate(['/admin/doctor'])
    // },2000)
    }
}
