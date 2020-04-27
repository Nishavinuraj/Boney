import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';

@Component({
  selector: 'app-site-management',
  templateUrl: './site-management.component.html',
  styleUrls: ['./site-management.component.scss'],
  animations: [routerTransition()]
})
export class SiteManagementComponent implements OnInit {

  constructor() {}

  ngOnInit() {}
}
