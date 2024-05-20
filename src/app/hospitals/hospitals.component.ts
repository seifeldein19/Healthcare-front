import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HospitalsService } from '../hospitals.service';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.css']
})
export class HospitalsComponent implements OnDestroy{
  hospitals:any[]=[] ;
  filteredHospitals:any[]=[] ;
  SubScribe:any;
  selectedSpeciality: string ='';
  selectLocationn:string ='';
  selectkoh:string ='';

  constructor(public _Router:Router ,private HospitalsServices:HospitalsService) {
  this.SubScribe =  this.HospitalsServices.getHospitals().
  subscribe(hospitals=>
    this.filteredHospitals= this.hospitals=hospitals.data);
  }








  confirm()
  {
    this._Router.navigate(['form'])
  }



  ngOnDestroy(): void {
    this.SubScribe.unsubscribe();

  }


  filter(queryString : string){
    if(queryString){
      this.filteredHospitals =
      this.hospitals.filter(
        h => h.hosbital_name.toLowerCase().includes(queryString.toLocaleLowerCase()))
    }
    else
    {
      this.filteredHospitals=this.hospitals;
    }

  }


  // search(event:any)
  // {


  //     this.selectLocationn =event.target.value;
  //     this.selectkoh =event.target.value;
  //     if(this.selectLocationn,this.selectkoh){
  //       this.filteredHospitals =
  //       this.hospitals.filter(
  //         h => h.location.toLowerCase().includes(this.selectLocationn.toLocaleLowerCase())

  //         m => m.kindofhospital.toLowerCase().includes(this.selectkoh.toLocaleLowerCase()))
  //     }

  //   //   this.selectkoh =event.target.value;
    //   if (this.selectkoh){
    //     this.filteredHospitals =
    //     this.hospitals.filter(
    //       h => h.kindofhospital.toLowerCase().includes(this.selectkoh.toLocaleLowerCase()))
    // }

  //     else
  //     {
  //       this.filteredHospitals=this.hospitals;
  //     }
  // }





  selectCancer(event:any)
  {
    this.selectedSpeciality =event.target.value;
    if(this.selectedSpeciality){
      this.filteredHospitals =
      this.hospitals.filter(
        h => h.cancer)
        console.log(this.filteredHospitals)

    }

    else
    {
      this.filteredHospitals=this.hospitals;
    }
  }
  // selectEar_Nose_Thort(event:any)
  // {
  //   this.selectedSpeciality =event.target.value;
  //   if(this.selectedSpeciality){
  //     this.filteredHospitals =
  //     this.hospitals.filter(
  //       h => h.Ear_Nose_Thort)
  //       console.log(this.filteredHospitals)

  //   }

  //   else
  //   {
  //     this.filteredHospitals=this.hospitals;
  //   }
  // }
  selectlocation(event:any)
  {
    this.selectLocationn =event.target.value;
    if(this.selectLocationn){
      this.filteredHospitals =
      this.hospitals.filter(
        h => h.location.toLowerCase().includes(this.selectLocationn.toLocaleLowerCase()))
        console.log(this.filteredHospitals)

    }
    else
    {
      this.filteredHospitals=this.hospitals;
    }
  }
  selectKindofHospital(event:any)
  {
    this.selectkoh =event.target.value;
    if(this.selectkoh){
      this.filteredHospitals =
      this.filteredHospitals.filter(
        h => h.kindofhospital.toLowerCase().includes(this.selectkoh.toLocaleLowerCase()))
    }
    else
    {
      this.filteredHospitals=this.hospitals;
    }
  }

}
