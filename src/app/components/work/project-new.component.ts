import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MyService } from  "../../services/service";
import { Router} from '@angular/router';
declare var require: any;

@Component({
    selector: 'my-project-new',
    templateUrl: './project-new.component.html',
    providers :[MyService]
})
export class ProjectNewComponent implements OnInit {

    fromAddresses = null;
    toAddresses = null;
    selectedFromAddress = null;
    balances = null;
    permissions = "receive";

    constructor(private _router: Router ,private _service: MyService) { 
         _service.getaddresses().then(data => {
            console.log(data);
            this.fromAddresses = data;
            this._service.getaddressbalances(this.fromAddresses[0].address).then(data => {
                this.balances = data;
            });
        });
        _service.listpermissions(this.permissions,null).then(data => {
            console.log(data);
            this.toAddresses = data;
        });
        
    }

    ngOnInit() { 
    }

    onClickFromAddress(address : string){
        this._service.getaddressbalances(address).then(data => {
            this.balances = data;
        });
    }
}