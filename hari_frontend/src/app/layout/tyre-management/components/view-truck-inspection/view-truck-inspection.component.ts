import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-truck-inspection',
  templateUrl: './view-truck-inspection.component.html',
  styleUrls: ['./view-truck-inspection.component.scss']
})
export class ViewTruckInspectionComponent implements OnInit {
  public tiDetails: any;
  constructor(private aroute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.tiDetails = this.aroute.snapshot.data['ti_details'];
  }
  public gotoEdit() {
    this.router.navigate([`/tyre-management/truck_inspection/${this.tiDetails['_id']}/edit`]);
  }
}
