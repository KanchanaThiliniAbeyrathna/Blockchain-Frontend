import { Component , OnInit } from '@angular/core';
import 'reflect-metadata';
import { MyService } from './services/service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MyService]
})
export class AppComponent implements OnInit{
  title = 'Welcome to distributed freelancing platform'; 

  constructor(private _router: Router) {  
    
  }

  ngOnInit(){
  
  }

  public getContractPage() {
      let link =['/contract'];
      this._router.navigate(link);
      console.log("contract clicked");
  }
  
  public getViewContractsPage(){
      let link =['/contract_view'];
      this._router.navigate(link);
      console.log("contract_view clicked");
  }

  public getNodePage() {
      let link =['/node'];
      this._router.navigate(link);
      console.log("node clicked");
  }

  public getBalancePage() {
      let link =['/balance'];
      this._router.navigate(link);
      console.log("balance clicked");
  }

}                                                  


