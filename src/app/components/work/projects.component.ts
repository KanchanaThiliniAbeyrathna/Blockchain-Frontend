import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MyService } from  "../../services/service";
import { Router} from '@angular/router';
declare var require: any;

import { Project } from "../../models/project";

@Component({
    selector: 'my-projects',
    templateUrl: './projects.component.html',
    providers :[MyService]
})
export class ProjectsComponent implements OnInit {

    custom_search= false;
    projctsStream : string = "projects";
    projects : Project[] = []; 

    constructor(private _router: Router ,private _service: MyService) {
        _service.listStreamItems(this.projctsStream).then(data => {
            data.forEach(element => {
                // console.log(this.Hex2String(element.data.toString()))
                let project : Project = JSON.parse(this.Hex2String(element.data.toString()));
                project.project_id = element.txid;
                project.client =element.publishers[0];
                this.projects.push(project);
            });
            console.log(this.projects);
        });
    }

    ngOnInit() { 
    }

    Hex2String(hex_str:string) {
        let j;
        let hexes = hex_str.match(/.{1,4}/g) || [];
        let result_back = "";
        for (j = 0; j < hexes.length; j++) {
            result_back += String.fromCharCode(parseInt(hexes[j], 16));
        }

        return result_back;
    }

    goToProject(id : string){
        let link = ['/project', id];
        this._router.navigate(link);
    }
}