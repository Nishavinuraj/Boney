import { Component, OnInit } from '@angular/core';
import { MetaService } from 'src/app/shared/services/meta.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminPrivilegesService } from 'src/app/shared/services/admin-privileges.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-agent-assigned-site',
  templateUrl: './agent-assigned-site.component.html',
  styleUrls: ['./agent-assigned-site.component.scss']
})
export class AgentAssignedSiteComponent implements OnInit {

  addForm: FormGroup;
  agents = [];
  sites = [];
  site_name: any;
  usertype: any;
  shown = false;

  constructor(
    public meta: MetaService,
    public fb: FormBuilder,
    public admin_privileges: AdminPrivilegesService,
    private toastr: ToastrService
  ) {

    this.usertype = this.meta.getSiteFromStorage().role;
    this.site_name = this.meta.getSiteFromStorage().site;

    // Filter form control
    this.addForm = this.fb.group({
      site: ['', Validators.required],
      traffic_agent: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.getAgentList();
    this.getSites();
  }

  getAgentList() {
    this.meta.getTrafficAgents().subscribe((res: any) => {
        this.agents = res;
        },
        err => {}
    );
  }

  getSites() {
    this.meta.getSites().subscribe((res: any) => {
        this.sites = res;
        if (this.usertype === 'ADMIN') {
            this.addForm.controls['site'].setValue(this.sites[0].branch_name);
        } else {
          this.addForm.controls['site'].setValue(this.site_name);
        }
    }, err => {
      this.toastr.error('Something went wrong.');
    });
  }

  save() {

    const val = {
      taname: this.addForm.value.traffic_agent,
      sites: []
    };

    this.addForm.value.site.forEach(element => {
      val.sites.push({'site': element});
    });

    this.shown = true;
    this.admin_privileges.saveTrafficAgentsData(val).subscribe(res => {
      this.shown = false;
      this.toastr.success('Site assign to traffic agent successfully.');
      this.addForm.reset();
      this.addForm.controls['traffic_agent'].setValue('');
    }, err => {
      this.shown = false;
      this.toastr.error('Something went wrong.');
    });
  }

}
