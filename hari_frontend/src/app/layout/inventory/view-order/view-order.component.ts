import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.scss']
})
export class ViewOrderComponent implements OnInit {
  public orderDetails: any;
  constructor(private aroute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.orderDetails = this.aroute.snapshot.data['order_details'];
  }
  public gotoEdit() {
    this.router.navigate([`/inventory/orders/${this.orderDetails['_id']}/edit`]);
  }
}
