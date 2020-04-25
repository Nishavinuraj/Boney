import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SiteService } from 'src/app/shared/services/site.service';
import { ToastrService } from 'ngx-toastr';
declare var moment: any

@Component({
  selector: 'app-billty-selection',
  templateUrl: './billty-selection.component.html',
  styleUrls: ['./billty-selection.component.scss']
})
export class BilltySelectionComponent implements OnInit {

  @Input() truckDetails;

  billties = [];
  obj = {
    lrno: 0,
    srno: 0
  };
  loading = false;

  constructor(
    public activeModal: NgbActiveModal,
    public site: SiteService,
    private toastr: ToastrService,
    // private modalService: NgbModal
    ) {

  }

  ngOnInit() {
    this.getBillties(this.truckDetails.truckno);
  }

  getBillties(truckno) {
    this.loading = true;
    this.site.getBilltyList(truckno).subscribe((res: any) => {
      this.loading = false;
      res.results.forEach(element => {
        element.checked = false;
        element.lrdate = moment(element.lrdate).format('DD/MM/YYYY');
      });

      this.billties = res.results;
    }, err => {
      this.loading = false;
      console.log('>>>>>>>>>err', err);
      this.toastr.error('Something went wrong.');
    });
  }

  onCheckedBillties(data, index) {
    this.billties.forEach((v, i) => {
      if (index === i) {
        v.checked = true;
        this.obj.lrno = v.lrno;
        this.obj.srno = this.truckDetails.srno;
      } else {
        v.checked = false;
      }
    });
   }

  updateBillties() {
    console.log('>>>>>>>save', this.obj);
    this.site.updateBillties(this.obj).subscribe((res: any) => {
      this.toastr.success('Billties updated successfully.');
      this.truckDetails.billtytime = moment(res.date).format('DD/MM/YYYY');
      // setTimeout(function () {
      //   this.getTruckData();
      // }, 2000);
      this.activeModal.close();
    }, err => {
      this.activeModal.dismiss();
      this.toastr.error('Something went wrong.');
    });
  }
}
