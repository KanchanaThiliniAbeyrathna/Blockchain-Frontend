import { Routes, RouterModule } from '@angular/router';

import { ModuleWithComponentFactories, ModuleWithProviders } from "@angular/core";

import { ContractComponent } from './components/contract/contract.component';
import { ContractViewComponent } from './components/contract/contract_view.component';
import { NodeComponent } from './components/node/node.component';
import { BalanceComponent } from './components/balance/balance.component';
import { ProjectNewComponent } from './components/work/project-new.component';
import { ProjectDetailComponent } from './components/work/project-detail.component';
import { ProjectsComponent } from './components/work/projects.component';
import { WorkComponent } from './components/work/work.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SkillComponent } from './components/admin/skill.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const appRoutes: Routes = [

        path: 'contract_view',
        component: ContractViewComponent
    },
    {
        path: 'project_new',
        component: ProjectNewComponent
    },
    {
        path: 'projects',
        component: ProjectsComponent
    },
    {
        path: 'project/:project_id',
        component: ProjectDetailComponent
    },
    {
        path: 'mywork',
        component: WorkComponent
    },
    {
        path: 'skills',
        component: SkillComponent
    },
  {
      path: 'login',
      component: LoginComponent
  },
  {
      path: 'register',
      component: RegisterComponent
  },
//   {
//       path: '',
//       redirectTo: '/home',
//       pathMatch: 'full'
//   },
  
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);