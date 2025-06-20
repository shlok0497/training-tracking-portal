import { Routes } from '@angular/router';
import { Associates } from './associates/associates';
import { Reports } from './reports/reports';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [
  { path: 'Associates', component: Associates },
  { path: 'reports', component: Reports },
  { path: 'dashboard', component: Dashboard },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];