import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MyService } from  "../../services/service";
import { Router} from '@angular/router';
declare var require: any;

@Component({
    selector: 'my-contract-view',
    templateUrl: './contract_view.component.html',
    providers :[MyService]
})
export class ContractViewComponent implements OnInit {

    constructor(private _router: Router ,private _service: MyService) { }

    ngOnInit() { 
        
    }
}