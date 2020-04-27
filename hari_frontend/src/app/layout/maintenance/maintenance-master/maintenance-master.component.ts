import { Component, OnInit } from '@angular/core';
import { MaintenanceService } from 'src/app/shared/services/maintenance.service';
import { ToastrService } from 'ngx-toastr';
declare var moment:any
import * as momentTZ from 'moment-timezone';

@Component({
  selector: 'app-maintenance-master',
  templateUrl: './maintenance-master.component.html',
  styleUrls: ['./maintenance-master.component.scss']
})
export class MaintenanceMasterComponent implements OnInit {

  truckData = [];
  truckAcceptedData = [];
  tyreData = [];
  tyreAcceptedData = [];

  statuses = [
    {status: 'Waiting for Spares'},
    {status: 'Work in Progress'},
    {status: 'Completed'},
  ];

  flags = {
    loadingTruckRecords: true,
    loadingAcceptedTruckRecords: true,
    loadedTruckRecords: false,
    loadedAcceptedTruckRecords: false,
    loadingTyreRecords: true,
    loadingAcceptedTyreRecords: true,
    loadedTyreRecords: false,
    loadedAcceptedTyreRecords: false,
  };

  constructor(
    private maintenance: MaintenanceService,
    private toastr: ToastrService
  ) {

  }

  ngOnInit() {
    this.getTruckRecords();
    this.getAcceptedTruckRecords();

    this.getTyreRecords();
    this.getAcceptedTyreRecords();
  }

  getTruckRecords() {
    this.flags.loadingTruckRecords = true;
    this.maintenance.getTruckRecords().subscribe((res: any) => {

      res.result.forEach(r => {
        r.editing = true;
      });

      this.truckData = res.result;
      this.flags.loadingTruckRecords = false;
      this.flags.loadedTruckRecords = true;
    }, err => {
      this.flags.loadingTruckRecords = false;
      this.toastr.error('Something went wrong when loading Truck Maintenance Records.' , 'Error');
    });
  }

  getAcceptedTruckRecords() {
    this.flags.loadingAcceptedTruckRecords = true;
    this.maintenance.getAcceptedTruckRecords().subscribe((res: any) => {

      res.result.forEach(r => {
        r.editing = true;
        const now = moment(new Date()); // todays date
        const end = r.job_time;
        const duration = moment.duration(now.diff(end));
        const hours = duration.asHours();
        r.countHrs = hours;
      });

      console.log();
      this.truckAcceptedData = res.result;
      this.flags.loadingAcceptedTruckRecords = false;
      this.flags.loadedAcceptedTruckRecords = true;
    }, err => {
      this.flags.loadingAcceptedTruckRecords = false;
      this.toastr.error('Something went wrong when loading Accepted Truck Maintenance Records.' , 'Error');
    });
  }

  getTyreRecords() {
    this.flags.loadingTyreRecords = true;
    this.maintenance.getTyreRecords().subscribe((res: any) => {

      res.result.forEach(r => {
        r.editing = true;
      });

      this.tyreData = res.result;
      this.flags.loadingTyreRecords = false;
      this.flags.loadedTyreRecords = true;
    }, err => {
      this.flags.loadingTyreRecords = false;
      this.toastr.error('Something went wrong when loading Truck Maintenance Records.' , 'Error');
    });
  }

  getAcceptedTyreRecords() {
    this.flags.loadingAcceptedTyreRecords = true;
    this.maintenance.getAcceptedTyreRecords().subscribe((res: any) => {

      res.result.forEach(r => {
        r.editing = true;
        const now = moment(new Date()); // todays date
        const end = r.job_time;
        const duration = moment.duration(now.diff(end));
        const hours = duration.asHours();
        r.countHrs = hours;
      });

      this.tyreAcceptedData = res.result;
      this.flags.loadingAcceptedTyreRecords = false;
      this.flags.loadedAcceptedTyreRecords = true;
    }, err => {
      this.flags.loadingAcceptedTyreRecords = false;
      this.toastr.error('Something went wrong when loading Accepted Truck Maintenance Records.' , 'Error');
    });
  }

  /** Actions and edits code below */
  acceptTruckRecord(td) {
    const data = {
      particulars: td.particulars,
      assign_to: td.assign_to,
      km_reading: td.km_reading,
      remarks: td.remarks
    };

    this.maintenance.acceptTruckData(td.id, data).subscribe(res => {
      this.getTruckRecords();
      this.getAcceptedTruckRecords();
    }, err => {
      this.toastr.error('Something went wrong when accepting truck maintenance record.' , 'Error');
    });
  }

  acceptTyreRecord(td) {
    const data = {
      particulars: td.particulars,
      assign_to: td.assign_to,
      km_reading: td.km_reading,
      remarks: td.remarks
    };

    this.maintenance.acceptTyreData(td.id, data).subscribe(res => {
      this.getTyreRecords();
      this.getAcceptedTyreRecords();
    }, err => {
      this.toastr.error('Something went wrong when accepting tyre maintenance record.' , 'Error');
    });
  }

  updateTruckRecord(td) {
    const data = {
      id: td.id,
      status: td.status,
      remarks: td.remarks
    };

    this.maintenance.updateAcceptedTruck(data).subscribe(res => {
      this.getTyreRecords();
      this.getAcceptedTyreRecords();
    }, err => {
      this.toastr.error('Something went wrong when accepting tyre maintenance record.' , 'Error');
    });
  }

  updateTyreRecord(td) {
    const data = {
      id: td.id,
      status: td.status,
      remarks: td.remarks
    };

    this.maintenance.updateAcceptedTyre(data).subscribe(res => {
      this.getTyreRecords();
      this.getAcceptedTyreRecords();
    }, err => {
      this.toastr.error('Something went wrong when accepting tyre maintenance record.' , 'Error');
    });
  }

}
