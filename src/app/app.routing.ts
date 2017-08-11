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

const appRoutes: Routes = [
    {
        path: 'node',
        component: NodeComponent
    },
    {
        path: 'balance',
        component: BalanceComponent
    }, {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'contract',
        component: ContractComponent
    },
    {
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
    //   {
    //       path: '',
    //       redirectTo: '/home',
    //       pathMatch: 'full'
    //   },

];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);