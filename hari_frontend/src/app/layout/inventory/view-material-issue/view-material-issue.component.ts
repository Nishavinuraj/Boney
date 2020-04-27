import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-material-issue',
  templateUrl: './view-material-issue.component.html',
  styleUrls: ['./view-material-issue.component.scss']
})
export class ViewMaterialIssueComponent implements OnInit {
  public miDetails: any;
  constructor(private aroute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.miDetails = this.aroute.snapshot.data['mi_details'];
  }
  public gotoEdit() {
    this.router.navigate([`/inventory/material-issue/${this.miDetails['_id']}/edit`]);
  }
}
