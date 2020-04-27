import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';


@Injectable({
  providedIn: 'root'
})
export class AdminprivilegesService {

  constructor(public api: ApiService) { }

  // Tyre-Rate-List
  addTrl(data) {
    return this.api.post('admin-privileges/tyre-ratelist', data);
  }

  updateRateMultidestKm() {
     return this.api.get('admin-privileges/site-destinationkms/update/rates_site_dest_kms');
  }

  updateSiteDestKm() {
    return this.api.get('admin-privileges/site-destinationkms/update/site_dest_kms');
  }

  getTrl(id) {
    return this.api.get('admin-privileges/tyre-ratelist/' + id);
  }

  updatTrl(id, data) {
    return this.api.put('admin-privileges/tyre-ratelist?id=' + id, data);
  }
  deleteTrl(id) {
    return this.api.delete(`admin-privileges/tyre-ratelist/${id}`);
  }
  getVendorMaster() {
    return this.api.get('vendor_master/all_vendors');
  }

    // Broker-Master
    addBm(data) {
      return this.api.post('admin-privileges/broker-master', data);
    }
    getBm(id) {
      return this.api.get('admin-privileges/broker-master/' + id);
    }

    updatBm(id, data) {
      return this.api.put('admin-privileges/broker-master?id=' + id, data);
    }
    deleteBm(id) {
      return this.api.delete(`admin-privileges/broker-master/${id}`);
    }

  // Site-profile
    addSpro(data) {
      return this.api.post('admin-privileges/site-profile', data);
    }
    getSpro(id) {
      return this.api.get('admin-privileges/site-profile/' + id);
    }

    updatSpro(id, data) {
      return this.api.put('admin-privileges/site-profile?id=' + id, data);
    }
    deleteSpro(id) {
      return this.api.delete(`admin-privileges/site-profile/${id}`);
    }

  // diesal rate master
  addDrm(data) {
    return this.api.post('admin-privileges/diesal-ratemaster', data);
  }
  getDrm(id) {
    return this.api.get('admin-privileges/diesal-ratemaster/' + id);
  }

  updatDrm(id, data) {
    return this.api.put('admin-privileges/diesal-ratemaster?id=' + id, data);
  }
  deleteDrm(id) {
    return this.api.delete(`admin-privileges/diesal-ratemaster/${id}`);
  }


  // Accounts - Master
  addAm(data) {
    return this.api.post('admin-privileges/accounts-master', data);
  }
  getAm(id) {
    return this.api.get('admin-privileges/accounts-master/' + id);
  }
  updatAm(id, data) {
    return this.api.put('admin-privileges/accounts-master?id=' + id, data);
  }
  deleteAm(id) {
    return this.api.delete(`admin-privileges/accounts-master/${id}`);
  }

  // Accounts - category
  addAc(data) {
    return this.api.post('admin-privileges/accounts-category', data);
  }
  getAc(id) {
    return this.api.get('admin-privileges/accounts-category/' + id);
  }
  updatAc(id, data) {
    return this.api.put('admin-privileges/accounts-category?id=' + id, data);
  }
  deleteAc(id) {
    return this.api.delete(`admin-privileges/accounts-category/${id}`);
  }

  // Site-petrolpump
addSpp(data) {
  return this.api.post('admin-privileges/site-petrolpump', data);
}
getSpp(id) {
  return this.api.get('admin-privileges/site-petrolpump/' + id);
}
updatSpp(id, data) {
  return this.api.put('admin-privileges/site-petrolpump?id=' + id, data);
}
deleteSpp(id) {
  return this.api.delete(`admin-privileges/site-petrolpump/${id}`);
}

getSitePetrolpump(name) {
  return this.api.get('meta/site/' + name);
}

  // site-destinationkms
  addSdk(data) {
    return this.api.post('admin-privileges/site-destinationkms', data);
  }
  getSdk(id) {
    return this.api.get('admin-privileges/site-destinationkms/' + id);
  }

  updatSdk(id, data) {
    return this.api.put('admin-privileges/site-destinationkms?id=' + id, data);
  }

  deleteSdk(id) {
    return this.api.delete(`admin-privileges/site-destinationkms/${id}`);
  }


  // Truck Average
  addTa(data) {
    return this.api.post('admin-privileges/truck-average', data);
  }
  getTa(id) {
    return this.api.get('admin-privileges/truck-average/' + id);
  }

  updatTa(id, data) {
    return this.api.put('admin-privileges/truck-average?id=' + id, data);
  }
  deleteTa(id) {
    return this.api.delete(`admin-privileges/truck-average/${id}`);
  }

  // Tyre-target-master
  addTtm(data) {
    return this.api.post('admin-privileges/tyre-target-master', data);
  }
  getTtm(id) {
    return this.api.get('admin-privileges/tyre-target-master/' + id);
  }

  updatTtm(id, data) {
    return this.api.put('admin-privileges/tyre-target-master?id=' + id, data);
  }
  deleteTtm(id) {
    return this.api.delete(`admin-privileges/tyre-target-master/${id}`);
  }

  // Site-petrolpump
  addCm(data) {
    return this.api.post('admin-privileges/consignee-master', data);
  }
  getCm(id) {
    return this.api.get('admin-privileges/consignee-master/' + id);
  }

  updatCm(id, data) {
    return this.api.put('admin-privileges/consignee-master?id=' + id, data);
  }
  deleteCm(id) {
    return this.api.delete(`admin-privileges/consignee-master/${id}`);
  }


}
