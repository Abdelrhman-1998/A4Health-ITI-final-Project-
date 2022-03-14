import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Specialty } from 'src/app/Models/specialty';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';
import { SpecialtiesService } from 'src/app/Services/specialties.service';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
@Component({
  selector: 'app-add-specialties',
  templateUrl: './add-specialties.component.html',
  styleUrls: ['./add-specialties.component.css'],
})
export class AddSpecialtiesComponent implements OnInit {
  specialty!: any;
  newSpecialty!: Specialty;
  specialtyItem = {} as Specialty;
  editMood = false;
  specialtyEdit!: Specialty;
  message!: string;
  id = this.activatedRoute.snapshot.params['id'];
  name=this.activatedRoute.snapshot.params['name'];
  title!: any;
  updateSpecialty!: Specialty;
  constructor(
    private specialtiesService: SpecialtiesService,
    private activatedRoute: ActivatedRoute,
    private router:Router
  ) {}

  // AddSpecialty =new FormGroup({
  //   name:new FormControl('',
  //   Validators.required)
  // })
  // get name(){
  //   return this.AddSpecialty.get('name')
  // }
  ngOnInit(): void {
    if (this.activatedRoute.snapshot.url[1].path == 'edit') {
      this.editMood = true;
    }
    if (this.editMood) {
      console.log('from if');

      // this.getdoctorId();
    }
  }
  sendDataOfspecialty(data: NgForm) {
    this.specialty = data;

    this.specialtiesService
      .addSpecialty(this.specialty)

      .subscribe((spe) => {
        this.newSpecialty = spe;
      },() => this.message='Input is Required',
      console.error);
  }
  updateDataOfspecialty(data: NgForm) {
    this.title = data;
    this.specialtiesService
      .updateSpecialty(this.id, this.title)
      
      .subscribe((res) => {
        console.log(res);
        this.router
        .navigate(['/admin/specialties'])
      },() => this.message='Delete successful',
      console.error);
    console.log(data);
  }
  // getdoctorId() {
  //   this.specialtyItem=[this.id,this.]
  //   // this.specialtiesService.getSpecialtyByID(this.id).subscribe((spe) => {
  //   //   this.specialtyItem = spe;
  //   //   // console.log(spe + 'testing');
  //   // });
  // }
}
