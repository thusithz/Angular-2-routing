import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PhonesComponent } from './phones/phones.component';
import { PhoneDetailComponent } from './phones/phone-detail.component';

import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './can-deactivate-guard.service';
 
const appRoutes: Routes = [
        {
          path: 'home',
          component: HomeComponent
        },
        {
          path: 'phones',
          component: PhonesComponent,
          canActivate: [AuthGuard]
        },
        {
          path: 'phones/:id',
          component: PhoneDetailComponent,
          canActivate: [AuthGuard],
          canDeactivate: [CanDeactivateGuard]
        },
        {
          path: '',
          redirectTo: '/home',
          pathMatch: 'full'
        }
];
 
export const appRoutingProviders: any[] = [AuthGuard, CanDeactivateGuard];
 
export const routing = RouterModule.forRoot(appRoutes);