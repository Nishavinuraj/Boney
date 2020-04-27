import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { TruckTyreMasterService } from 'src/app/shared/services/truck-tyre-master.service';
import { NgbModal, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { routerTransition } from 'src/app/router.animations';
import { Observable } from 'rxjs';
import { SiteService } from 'src/app/shared/services/site.service';
import * as momentTZ from 'moment-timezone';
import { MetaService } from 'src/app/shared/services/meta.service';
import { type } from 'os';
import { Router , ActivatedRoute} from '@angular/router';
import { TyremanagementService } from '../../tyremanagement.service';
/* import * as moment from 'moment'; */
declare var moment: any;

@Component({
  selector: 'app-add-truck-inspection',
  templateUrl: './add-truck-inspection.component.html',
  styleUrls: ['./add-truck-inspection.component.scss'],
  animations: [routerTransition()]
})
export class AddTruckInspectionComponent implements OnInit {
  filterForm: FormGroup;
  addForm: FormGroup;
  editForm: FormGroup;
  truckno_option = [];
  filters = {
    idate: '',
    truck_no: '',
    type: '',
    km_reading: ''
  };
  inspectionReport: any;
  tyres = [];
  loading = false;
  loaded = true;
  submitted = false;
  idate: NgbDateStruct;
  observations = [];
  recommendations = [];
  filterSubmitted = false;
  truck_no;
  i_date;
  km_reading;
  types = [{ name: 'New' }];
  activeTab = 'Inspection';
  truckNo: any;
  items: FormArray;
  inspArr: FormArray;
  positions = [];
  show = false;
  inspectons = [];

  constructor(
    public fb: FormBuilder,
    public truckTyreMasterService: TruckTyreMasterService,
    public toastr: ToastrService,
    public tm: TyremanagementService,
    public meta: MetaService,
    public site: SiteService,
    private router: Router,
  ) {}

  ngOnInit() {

    this.tm.getAllOar().subscribe(result=>{
      result['records'].forEach(record=>{
          if(record['orname']=='Observation'){
              this.observations.push(record.desc);
          }

          if(record['orname']=='Recommendation'){
            this.recommendations.push(record.desc);
        }
      })
    })

    this.filterForm = this.fb.group({
      idate: ['', Validators.required],
      truck_no: ['', Validators.required],
      km_reading: ['', Validators.required],
      type: ['', Validators.required]
    });

    this.filterForm.patchValue({type:'New'})

    this.meta.getCompanyTruckList().subscribe(siteInfo => {
      this.truckno_option = siteInfo['result'];
      console.log('>>>>Vendor List', siteInfo['result']);
    });

    this.addForm = this.fb.group({
      remarks: [''],
      items: this.fb.array([ this.createItem() ]),
      observations:[''],
      recommendations:['']
    });

    this.editForm = this.fb.group({
      remarks: [''],
      inspArr: this.fb.array([])
    });

    this.items = this.addForm.get('items') as FormArray;
    this.inspArr = this.addForm.get('inspArr') as FormArray;

  }

  // For add inspection
  createItem(): FormGroup {
    return this.fb.group({
      pno: [''],
      positionname: [''],
      tyre_no: [''],
      date_of_fitment: [''],
      fitment_km: [''],
      nsd: [''],
      rtd: ['', Validators.required]
    });
  }

  // For Edit inspection
  createInspArr(): FormGroup {
    return this.fb.group({
      pno: [''],
      positionname: [''],
      tyre_no: [''],
      date_of_fitment: [''],
      fitment_km: [''],
      nsd: [''],
      rtd: ['']
    });
  }

  // get Formarray controls for add inspection
  get multipleFormControls() {
    return this.addForm.get('items')['controls'];
  }

  // get Formarray controls for edit inspection
  get multipleEditControls() {
    return this.editForm.get('inspArr')['controls'];
  }

  
  // Set default value in form array for add inspection form
  addExistingPositions(e) {
    return this.fb.group({
      pno: [e.pno, Validators.required],
      positionname: [e.positionname, Validators.required],
      date_of_fitment: [e.date_of_fitment],
      fitment_km: [e.fitment_km],
      tyre_no: [e.tyre_no],
      nsd: [e.nsd],
      rtd: ['', Validators.required]
    });
  }

  // Set default value in form array for edit inspection form
  addExisitingInsp(e) {

    // console.log(">>>>xyxecw", e);

    return this.fb.group({
      pno: [e.pno],
      positionname: [e.positionname],
      tyre_no: [e.tyre_no],
      date_of_fitment: [e.date_of_fitment],
      fitment_km: [e.fitment_km],
      nsd: [e.nsd],
      rtd: [e.rtd]
    });
  }

  fetch() {
    this.filterSubmitted = true;
    this.truck_no=this.filterForm.value.truck_no
    this.i_date=this.filterForm.value.idate
    this.km_reading=this.filterForm.value.km_reading
    if (this.filterForm.value.type === 'New') {

      // Remove default formarray from addform
      const control = <FormArray>this.addForm.controls['items'];

      for (let i = control.length - 1; i >= 0; i--) {
        control.removeAt(i);
      }

      this.activeTab = 'New';

      this.truckNo = this.filterForm.value.truck_no;
      const obj = {
        truck_no: this.filterForm.value.truck_no
      };

      this.loading = true;
      this.loaded = false;
      this.truckTyreMasterService.getTyrePosition(obj).subscribe(
        (res: any) => {
          this.loading = false;
          this.loaded = true;
          res.results.forEach(element => {
            // Push res value to form array
            this.multipleFormControls.push(this.addExistingPositions(element));
          });

          this.positions = res.results;
        },
        err => {
          this.loading = false;
          this.loaded = true;
          console.log('>>>>>>>>>err', err);
        }
      );
    } else {
      // Remove default formarray from editForm
      const control = <FormArray>this.editForm.controls['inspArr'];

      for (let i = control.length - 1; i >= 0; i--) {
        control.removeAt(i);
      }

      this.activeTab = 'Inspection';

      let idate = this.filterForm.value.idate;

      idate = idate.year + '-' + idate.month + '-' + idate.day;

      if (this.filterForm.value.idate) {
        this.filters.idate = idate;
      } else {
        this.filters.idate = '';
      }

      if (this.filterForm.value.truck_no) {
        this.filters.truck_no = this.filterForm.value.truck_no;
      } else {
        this.filters.truck_no = '';
      }

      if (this.filterForm.value.type) {
        this.filters.type = this.filterForm.value.type;
      } else {
        this.filters.type = '';
      }

      if (this.filterForm.value.km_reading) {
        this.filters.km_reading = this.filterForm.value.km_reading;
      } else {
        this.filters.km_reading = '';
      }

      this.loading = true;
      this.loaded = false;
      this.inspectionReport = [];
      this.truckTyreMasterService.getTruckInspectionList(this.filters).subscribe(
        (res: any) => {
          this.loading = false;
          this.loaded = true;

          res.results.inspections.forEach(element => {
            console.log(' Element Date ', element.date_of_fitment );
            // set date
            // element.date_of_fitment = momentTZ(element.date_of_fitment).tz('Asia/Calcutta').format('DD/MM/YYYY');
            // const splitedDate = element.date_of_fitment.split('/');
            // const dateObj = {
            //   day: parseInt(splitedDate[0]),
            //   month: parseInt(splitedDate[1]),
            //   year: parseInt(splitedDate[2])
            // };
            // element.date_of_fitment = dateObj;

            // Push res value to form array
            this.multipleEditControls.push(this.addExisitingInsp(element));
          });
          this.editForm.controls['remarks'].setValue(res.results.remarks);
          this.inspectionReport = res.results;
        },
        err => {
          this.loading = false;
          this.loaded = true;
          console.log('>>>>>>>>>err', err);
        }
      );
    }

    this.tm.getAllOar().subscribe(result=>{
      result['records'].forEach(record=>{
          if(record['orname']=='Observation'){
              this.observations.push(record.desc);
          }

          if(record['orname']=='Recommendation'){
            this.recommendations.push(record.desc);
        }
      })
    })

  }

  // Multiple form add in addForm
  addItem() {
    this.items = this.addForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }

  // Remove multiple form
  removeItem(index) {
    if (index === 0) {
      this.toastr.error('Cannot remove this form.');
    } else {
      this.items.removeAt(index);
    }
  }

  addInspection(isValid) {
    
    console.log (' Save is working >>>>');
    this.submitted = true;

     //if (isValid) {
      // km_reading: this.addForm.value.km_reading
      let inValues = [];
      console.log (' isValid is working >>>>');
      this.multipleFormControls.forEach(control=>{
        inValues.push(control.value);
      });
      this.addForm.controls['items'].patchValue(inValues);
      const val = this.addForm.controls['items'].value;
      this.truckNo = this.filterForm.value.truck_no;
      const obj = {
        idate:new Date(this.i_date.year, this.i_date.month - 1, this.i_date.day,23,59,59),
        km_reading:this.km_reading,
        truck_no: this.truck_no,
        inspections: val,
        remarks: this.addForm.value.remarks,
        observations: this.addForm.value.observations,
        recommendations: this.addForm.value.recommendations
      };

      this.loading = true;
      this.loaded = false;
      this.truckTyreMasterService.addTruckInspection(obj).subscribe(
        res => {
          // this.loading = false;
          // this.loaded = true;
          // this.activeTab = 'Inspection';
          // this.filterForm.controls['type'].setValue(this.activeTab);
          // this.fetch();
          this.router.navigate(['/'])
          .then(()=>{this.router.navigate(['/tyre-management/truck-inspection'])}) ;
          this.toastr.success('Truck Inspection added successfully.');
        },
        err => {
          // this.loading = false;
          // this.loaded = true;
          // this.activeTab = 'New';
          // this.filterForm.controls['type'].setValue(this.activeTab);
          this.toastr.error('Something went wrong.');
        }
      );
      // this.addForm.reset();
      // this.filterForm.reset();

    //}
  }

  update() {

    const val = [];
    this.multipleEditControls.forEach(element => {
        const d = element.value.date_of_fitment;
        element.value.date_of_fitment = moment(d.year + '-' + d.month + '-' + d.day, 'YYYY-MM-DD').format('YYYY-MM-DD');
        val.push(element.value);
    });

    const obj = {
      idate:new Date(this.i_date.year, this.i_date.month - 1, this.i_date.day,23,59,59),
      km_reading:this.km_reading,
      truck_no: this.truck_no,
      remarks: this.editForm.value.remarks,
      inspections: val
    };
    console.log(obj)

    this.loading = true;
    this.loaded = false;
    this.truckTyreMasterService.updateTruckInspection(obj).subscribe(
      res => {
        this.loading = false;
        this.loaded = true;
        this.fetch();
        this.show = false;
        this.toastr.success('Truck Inspection updated successfully.');
      },
      err => {
        this.loading = false;
        this.loaded = true;
        console.log('>>>>>>>>>err', err);
        this.toastr.error('Something went wrong.');
      }
    );
  }

  delete(i) {

    // console.log(">>>>>>>insp", this.inspectionReport);

    const conf = confirm('Are you sure you want to delete this record ?');

    if (conf === true) {
      const obj = {
        insp_id: this.inspectionReport.inspections[i]._id
      };

      // console.log(">>>>>obj", obj);

      this.loading = true;
      this.loaded = false;
      this.truckTyreMasterService.deleteTruckInspection(this.inspectionReport._id, obj).subscribe(
        res => {
          this.loading = false;
          this.loaded = true;
          const control = <FormArray>this.editForm.controls['inspArr'];
          control.removeAt(i);
          this.toastr.success('Truck Inspection deleted successfully.');
        },
        err => {
          this.loading = false;
          this.loaded = true;
          console.log('>>>>>>>>>err', err);
          this.toastr.error('Something went wrong.');
        }
      );
    }
  }
}
