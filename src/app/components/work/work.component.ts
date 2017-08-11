import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MyService } from  "../../services/service";
import { Router} from '@angular/router';
declare var require: any;

@Component({
    selector: 'my-work',
    templateUrl: './work.component.html',
    providers :[MyService]
})
export class WorkComponent implements OnInit {

    constructor(private _router: Router ,private _service: MyService) {
        
    }

    ngOnInit() { 
    }

}