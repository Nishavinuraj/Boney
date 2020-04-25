import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {

  constructor(public api: ApiService) { }


  // job-workmaster
  crateJobworkmaster(data) {
    return this.api.post('maintenance/job-workmaster', data);
  }
  getJobworkmaster(id) {
    return this.api.get('maintenance/job-workmaster/' + id);
  }
  updatJobworkmaster(id, data) {
    return this.api.put('maintenance/job-workmaster?id=' + id, data);
  }

  deleteJobworkmaster(id) {
    return this.api.delete(`maintenance/job-workmaster/${id}`);
  }

  // job-work
  crateJobwork(data) {
    return this.api.post('maintenance/job-work', data);
  }
  getJobwork(id) {
    return this.api.get('maintenance/job-work/' + id);
  }
  updatJobwork(id, data) {
    return this.api.put('maintenance/job-work?id=' + id, data);
  }

  deleteJobwork(id) {
    return this.api.delete(`maintenance/job-work/${id}`);
  }

  getJobNumberDetails(data) {
    return this.api.post('maintenance/job-work/generate_job_number', data);

  }

  getVendorMasterList() {
    return this.api.get('vendor_master/list');
  }

  getOverAllData() {
    return this.api.get('maintenance/reminders/first_screen');
  }

  getDetails() {
    return this.api.get('maintenance/reminders/second_screen');
  }

  getExpiredAllTrucksDetails() {
    return this.api.get('maintenance/reminders/second_screen_expired');
  }

  updateAttachements(data) {
    return this.api.put('maintenance/reminders/update', data);
  }
  // engine-typemaster
  crateEtm(data) {
    return this.api.post('maintenance/engine-typemaster', data);
  }
  getEtm(id) {
    return this.api.get('maintenance/engine-typemaster/' + id);
  }
  updatEtm(id, data) {
    return this.api.put('maintenance/engine-typemaster?id=' + id, data);
  }

  deleteEtm(id) {
    return this.api.delete(`maintenance/engine-typemaster/${id}`);
  }

}
