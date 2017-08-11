import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MyService } from  "../../services/service";
import { Router} from '@angular/router';
declare var require: any;

@Component({
    selector: 'my-balance',
    templateUrl: './balance.component.html',
    providers :[MyService]
})
export class BalanceComponent implements OnInit {

    // address = "1JEYjux6UsvM4XK2SARwSm1m3ebqgQQdTFeq4f";
    addresses = null;
    allBalances = null;

    constructor(private _router: Router ,private _service: MyService) {
        _service.getaddresses().then(data => {
            console.log(data);
            this.addresses = data;
            this.allBalances = this.getBalances(this.addresses);
        });
    }

    private getBalances ( addresses : any){
        let balances = [] ;
        addresses.forEach(address => {
            
            this._service.getaddressbalances(address.address).then(data => {
                balances.push(data)
            });
        });  
        return balances;
    }

    ngOnInit() { 
        
    }
}