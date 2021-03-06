import { Component, OnInit, Input, Output } from '@angular/core';
import { DeleteService } from '../../services/delete.service';
import { User } from '../../entities/userInterface';

@Component({
  selector: 'app-table-address-info',
  templateUrl: './table-address-info.component.html',
  styleUrls: ['./table-address-info.component.css'],
  providers: [DeleteService]
})
export class TableAddressInfoComponent implements OnInit {

  @Input() addresses: User;
  constructor(private deleteService: DeleteService) {}
  ngOnInit() {
  }
  deleteAddress(user: User, idAddress) {
    this.addresses = this.deleteService.deleteAddress(user, idAddress);
  }
}
