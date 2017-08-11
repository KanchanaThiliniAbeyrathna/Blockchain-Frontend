import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MyService } from  "../../services/service";
import { Router} from '@angular/router';
declare var require: any;

@Component({
    selector: 'my-projects',
    templateUrl: './projects.component.html',
    providers :[MyService]
})
export class ProjectsComponent implements OnInit {

    custom_search= false;

    constructor(private _router: Router ,private _service: MyService) {
        
    }

    ngOnInit() { 
    }
}