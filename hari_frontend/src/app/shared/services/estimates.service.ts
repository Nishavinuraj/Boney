import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class EstimateService {

  constructor(public api: ApiService) { }

  getCreatedEstimates(){
    return this.api.get('estimates/list_created');
  }

  getEstimateById(id){
    return this.api.get('estimates/find/'+id);
  }

  getSubmissionOfVendor(eid,vendor){
    return this.api.get('estimates/find-submission/'+eid+"/"+vendor);
  }
  
  addEstimate(data) {
    return this.api.post('estimates/create_estimate', data);
  }

  submitEstimate(data){
    return this.api.post('estimates/submit', data);
  }

  getEstimatesSubmisionById(id){
    return this.api.get('estimates/find_submission/'+id);
  }

  getEstimatesSubmisions(){
    return this.api.get('estimates/list_submissions');
  }

  updateEstimateSubmission(id){
    return this.api.put('estimates/update/submission/'+id,'');
  }

  rejectEstimateSubmission(id){
    return this.api.put('estimates/reject/submission/'+id,'');
  }

  getEstimatesProdSubmisions(id){
    return this.api.get('estimates/list_submissions/'+id);
  }

  delete(id){
    return this.api.delete('estimates/delete/'+id);
  }

  update(id,data){
    return this.api.put('estimates/update/'+id,data);
  }

}
