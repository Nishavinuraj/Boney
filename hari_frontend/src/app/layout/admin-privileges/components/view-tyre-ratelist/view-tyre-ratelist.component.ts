import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-tyre-ratelist',
  templateUrl: './view-tyre-ratelist.component.html',
  styleUrls: ['./view-tyre-ratelist.component.scss']
})
export class ViewTyreRatelistComponent implements OnInit {
  public trlDetails: any;
  constructor(private aroute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.trlDetails = this.aroute.snapshot.data['trl_details'];
  }
  public gotoEdit() {
    this.router.navigate([`/admin-privileges/tyre-ratelist/${this.trlDetails['_id']}/edit`]);
  }
}
