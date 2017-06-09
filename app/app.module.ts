import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { ContractComponent } from './components/contract/contract.component';
import { NodeComponent } from './components/node/node.component';
import { BalanceComponent } from './components/balance/balance.component';

import { routing} from './app.routing';

import { MyService } from './services/service';

@NgModule({
  declarations: [
    AppComponent,
    ContractComponent,
    NodeComponent,
    BalanceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [MyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
