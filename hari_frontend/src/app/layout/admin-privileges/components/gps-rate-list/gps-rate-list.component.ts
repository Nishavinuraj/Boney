import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/shared/services/api.service';
import { GpsRateService } from 'src/app/shared/services/gps-rate.service';

@Component({
  selector: 'app-gps-rate-list',
  templateUrl: './gps-rate-list.component.html',
  styleUrls: ['./gps-rate-list.component.scss']
})
export class GpsRateListComponent implements OnInit {

  addForm: FormGroup;
  table_data = [];
  cities = [];
  selectedCity: any;
  constructor(
    public api: ApiService,
    public gpsRateService: GpsRateService,
    private formBuilder: FormBuilder,
  ) {
    this.addForm = this.formBuilder.group({
      destination: '',
      eight_mt: [0],
      twentyone_mt: [0],
      twentyfive_mt: [0],
      thirtythree_mt: [0],
    });
  }

  ngOnInit() {
    this.fetchTableData();
    this.fetchDropDownData();
  }

  fetchTableData() {
    this.gpsRateService.getAllGpsRate().subscribe((res: any) => {
      console.log(res);
      this.table_data = res;
    }, err => {

    });
  }

  fetchDropDownData() {
    this.gpsRateService.getDestination().subscribe((res: any) => {
      console.log(res);
      this.cities = res;
    //   this.dropdown_data.push(0, {
    //     'name': 'please select Destination'
    // });
    }, err => {

    });
  }

  addData() {


      const data = {
        // tslint:disable-next-line:max-line-length
        'destination': this.addForm.controls['destination'].value.name ? this.addForm.controls['destination'].value.name : this.addForm.controls['destination'].value,
        'eight_mt': this.addForm.controls['eight_mt'].value,
        'twentyone_mt': this.addForm.controls['twentyone_mt'].value,
        'twentyfive_mt': this.addForm.controls['twentyfive_mt'].value,
        'thirtythree_mt': this.addForm.controls['thirtythree_mt'].value
      } ;
      console.log(data);
      this.gpsRateService.addRate(data).subscribe(res => {
        console.log(res);
        this.resetFilters();
        this.fetchTableData();
      }, err => {

      });
  }

  editData(val) {
    console.log(val);
    this.addForm.controls['destination'].setValue(val.destination);
    this.addForm.controls['eight_mt'].setValue(val.eight_mt);
    this.addForm.controls['twentyone_mt'].setValue(val.twentyone_mt);
    this.addForm.controls['twentyfive_mt'].setValue(val.twentyfive_mt);
    this.addForm.controls['thirtythree_mt'].setValue(val.thirtythree_mt);

  }

  deleteData(val) {
    const data = {
      'destination': val.destination,
    };
    // console.log(val)
    this.gpsRateService.deleteData(data).subscribe(res => {
      console.log(res);
      this.fetchTableData();
    }, err => {

    });
  }

  resetFilters() {
    this.addForm.reset();
  }

}
