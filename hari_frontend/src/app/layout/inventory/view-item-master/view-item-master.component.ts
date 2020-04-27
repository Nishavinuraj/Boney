import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-item-master',
  templateUrl: './view-item-master.component.html',
  styleUrls: ['./view-item-master.component.scss']
})
export class ViewItemMasterComponent implements OnInit {
  public itemsDetails: any;
  constructor(private aroute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.itemsDetails = this.aroute.snapshot.data['items_details'];
  }
  public gotoEdit() {
    this.router.navigate([`/inventory/items-master/${this.itemsDetails['_id']}/edit`]);
  }
}