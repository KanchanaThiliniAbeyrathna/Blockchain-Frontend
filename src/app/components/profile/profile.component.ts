import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MyService } from  "../../services/service";
import { Router} from '@angular/router';
declare var require: any;

@Component({
    selector: 'my-profile',
    templateUrl: './profile.component.html',
    providers :[MyService]
})
export class ProfileComponent implements OnInit {

    ChainInfo = null;
    PeerInfo = null;

    constructor(private _router: Router ,private _service: MyService) {
        _service.getinfo().then(data => {
            console.log(data);
            this.ChainInfo = data;
        });

        _service.getpeerinfo().then(data => {
            console.log(data);
            this.PeerInfo = data;
        });
    }

    ngOnInit() { 
        
    }
}