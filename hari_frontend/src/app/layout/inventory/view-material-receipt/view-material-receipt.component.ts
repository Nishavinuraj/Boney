import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-material-receipt',
  templateUrl: './view-material-receipt.component.html',
  styleUrls: ['./view-material-receipt.component.scss']
})
export class ViewMaterialReceiptComponent implements OnInit {
  public mrDetails: any;
  constructor(private aroute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.mrDetails = this.aroute.snapshot.data['mr_details'];
  }
  public gotoEdit() {
    this.router.navigate([`/inventory/material-receipt/${this.mrDetails['_id']}/edit`]);
  }
}
