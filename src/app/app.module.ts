import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { ContractComponent } from './components/contract/contract.component';
import { ContractViewComponent } from './components/contract/contract_view.component';
import { NodeComponent } from './components/node/node.component';
import { BalanceComponent } from './components/balance/balance.component';
import { ProjectNewComponent } from './components/work/project-new.component';
import { ProjectDetailComponent } from './components/work/project-detail.component';
import { ProjectsComponent } from './components/work/projects.component';
import { WorkComponent } from './components/work/work.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SkillComponent } from './components/admin/skill.component';

import { routing} from './app.routing';

import { MyService } from './services/service';

@NgModule({
  declarations: [
    AppComponent,
    ContractComponent,
    ContractViewComponent,
    NodeComponent,
    BalanceComponent,
    ProjectNewComponent,
    ProjectDetailComponent,
    ProjectsComponent,
    WorkComponent,
    ProfileComponent,
    SkillComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent
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
