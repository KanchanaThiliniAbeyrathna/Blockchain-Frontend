import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MyService } from "../../services/service";
import { Router, Params, ActivatedRoute } from '@angular/router';
declare var require: any;

import { Project } from "../../models/project";

@Component({
    selector: 'my-project-detail',
    templateUrl: './project-detail.component.html',
    providers: [MyService]
})
export class ProjectDetailComponent implements OnInit {

    project: Project;
    projctsStream: string = "projects";

    constructor(private _service: MyService, private _route: ActivatedRoute, private _router: Router) {

    }

    ngOnInit() {
        this._route.params.forEach((params: Params) => {
            if (params['project_id'] !== undefined) {
                let project_id = params['project_id'];
                this._service.getstreamitem(this.projctsStream, project_id.toString())
                    .then(data => {
                        this.project = JSON.parse(this.Hex2String(data.data.toString()));
                        this.project.project_id = data.txid;
                        this.project.client = data.publishers[0];
                    });
            } else {

            }
        });
    }

    Hex2String(hex_str: string) {
        let j;
        let hexes = hex_str.match(/.{1,4}/g) || [];
        let result_back = "";
        for (j = 0; j < hexes.length; j++) {
            result_back += String.fromCharCode(parseInt(hexes[j], 16));
        }

        return result_back;
    }

}