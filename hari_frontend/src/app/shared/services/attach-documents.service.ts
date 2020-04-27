import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AttachDocumentsService {

  constructor(public api: ApiService) { }


  createRecord(data) {
    return this.api.post('attach_documents/create', data);
  }

  getdocumentName(query) {
    return this.api.get('attach_documents/list_document_name?q=' + query);
  }

  getMasterName() {
    return this.api.get('attach_documents/list_document_master');
  }

  getfilesList(truckno) {
    return this.api.get('attach_documents/list_files?truckno=' + truckno);
  }

  addDocumentMaster(data) {
    return this.api.post('attach_documents/add_document_master', data);
  }

  deleteDocumentMaster(d) {
    return this.api.delete('attach_documents/delete_document_master', {params: d});
  }

  updatDocumentMaster(id, data) {
    return this.api.put('attach_documents/update_document_master?id=' + id, data);
  }

  getOverAllData() {
    return this.api.get('attach_documents/first_screen');
  }

  getDetails() {
    return this.api.get('attach_documents/second_screen');
  }

  getExpiredAllTrucksDetails() {
    return this.api.get('attach_documents/second_screen_expired');
  }

  getTrafficAgentDocumentOverAllData(params) {
    return this.api.get('traffic_agent/first_screen', params);
  }

  getTrafficAgentDocumentDetails(params) {
    return this.api.get('traffic_agent/second_screen', params);
  }

  getExpiredTrafficAgentDocumentDetails(params) {
    return this.api.get('traffic_agent/second_screen_expired', params);
  }

  updateAttachements(data) {
    return this.api.put('attach_documents/update', data);
  }

  deleteDocument(data) {
    return this.api.put('attach_documents/delete_document', data);
  }

  updateDocumentData(data) {
    return this.api.put('attach_documents/update_file_date', data);
  }
}
