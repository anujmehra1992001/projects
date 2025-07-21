import { Routes } from '@angular/router';
import { authGuard } from './services/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: 'forgot-password',
    loadComponent: () =>
      import('./pages/dashboard/forgot-password/forgot-password.component').then(
        (m) => m.ForgotPasswordComponent
      ),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component').then((c) => c.DashboardComponent),
    canActivate: [authGuard],
    children: [
      {
        path: '',
        redirectTo: '/dashboard/reports',
        pathMatch: 'full',
      },
      {
        path: 'reports',
        loadComponent: () =>
          import('./pages/dashboard/reports/reports.component').then(
            (c) => c.reportsComponent
          ),
      },
      {
        path: 'modal-content',
        loadComponent: () =>
          import('./pages/dashboard/modal-content/modal-content.component').then(
            (c) => c.ModalContentComponent
          ),
      },
      {
        path: 'json-api',
        loadComponent: () =>
          import('./pages/dashboard/json-api/json-api.component').then(
            (c) => c.JsonApiComponent
          ),
      },
      {
        path: 'sales-chart',
        loadComponent: () =>
          import('./pages/dashboard/sales-chart/sales-chart.component').then(
            (c) => c.SalesChartComponent
          ),
      },
      {
        path: 'projects',
        loadComponent: () =>
          import('./pages/dashboard/projects/projects.component').then(
            (c) => c.ProjectsComponent
          ),
        children: [
          {
            path: 'edit-project',
            loadComponent: () =>
              import('./pages/dashboard/projects/edit-project/edit-project.component').then(
                (c) => c.EditProjectComponent
              ),
            children: [
              {
                path: 'month',
                loadComponent: () =>
                  import('./pages/dashboard/projects/edit-project/month/month.component').then(
                    (c) => c.MonthComponent
                  ),
              },
            ],
          },
        ],
      },
      {
        path: 'employee',
        loadComponent: () =>
          import('./pages/settings/settings.component').then(
            (c) => c.SettingsComponent
          ),
      },
    ],
  },
];

