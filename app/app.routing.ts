import { Routes, RouterModule } from '@angular/router';

import { ModuleWithComponentFactories , ModuleWithProviders } from "@angular/core";

import { ContractComponent } from './components/contract/contract.component';
import { NodeComponent } from './components/node/node.component';
import { BalanceComponent } from './components/balance/balance.component';

const appRoutes: Routes = [
  {
      path: 'contract',
      component: ContractComponent
  },
  {
      path: 'node',
      component: NodeComponent
  },
  {
      path: 'balance',
      component: BalanceComponent
  },
//   {
//       path: '',
//       redirectTo: '/home',
//       pathMatch: 'full'
//   },
  
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);