import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Injectable()
export class InventoryService {

  constructor(public api: ApiService) { }


  // item-master
  crateItemMaster(data) {
    return this.api.post('inventory/items-master', data);
  }
  getItemMaster(id) {
    return this.api.get('inventory/items-master/' + id);
  }
  updatItemMaster(id, data) {
    return this.api.put('inventory/items-master?id=' + id, data);
  }

  deleteItemMaster(id) {
    return this.api.delete(`inventory/items-master/${id}`);
  }

  // department-master
  crateDepartmentMaster(data) {
    return this.api.post('inventory/department-master', data);
  }
  getDepartmentMaster(id) {
    return this.api.get('inventory/department-master/' + id);
  }
  updatDepartmentMaster(id, data) {
    return this.api.put('inventory/department-master?id=' + id, data);
  }

  deleteDepartmentMaster(id) {
    return this.api.delete(`inventory/department-master/${id}`);
  }


  // orders
  crateOrder(data) {
    return this.api.post('inventory/orders', data);
  }
  getOrder(id) {
    return this.api.get('inventory/orders/' + id);
  }
  getOrderNumberDetails(data) {
    return this.api.post('inventory/orders/generate_order_number', data);

  }
  updatOrder(id, data) {
    return this.api.put('inventory/orders?id=' + id, data);
  }

  deleteOrder(id) {
    return this.api.delete(`inventory/orders/${id}`);
  }


  // Material Receipts
  addMr(data) {
    return this.api.post('inventory/material-receipt', data);
  }
  getMr(id) {
    return this.api.get('inventory/material-receipt/' + id);
  }
  getMrNumberDetails(data) {
    return this.api.post('inventory/material-receipt/generate_mr_number', data);
  }
  updatMr(id, data) {
    return this.api.put('inventory/material-receipt?id=' + id, data);
  }
  deleteMr(id) {
    return this.api.delete(`inventory/material-receipt/${id}`);
  }

// Material Issue
addMi(data) {
  return this.api.post('inventory/material-issue', data);
}
getMi(id) {
  return this.api.get('inventory/material-issue/' + id);
}
getMiNumberDetails(data) {
  return this.api.post('inventory/material-issue/generate_mi_number', data);

}
updatMi(id, data) {
  return this.api.put('inventory/material-issue?id=' + id, data);
}
deleteMi(id) {
  return this.api.delete(`inventory/material-issue/${id}`);
}



// Scrap Sale
addSs(data) {
  return this.api.post('inventory/scrap-sale', data);
}
getSs(id) {
  return this.api.get('inventory/scrap-sale/' + id);
}
getSsNumberDetails(data) {
  return this.api.post('inventory/scrap-sale/generate_ss_number', data);
}
updatSs(id, data) {
  return this.api.put('inventory/scrap-sale?id=' + id, data);
}
deleteSs(id) {
  return this.api.delete(`inventory/scrap-sale/${id}`);
}

}
