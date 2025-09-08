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
    import('./pages/dashboard/dashboard.component').then(
      (c) => c.DashboardComponent
    ),
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
          (c) => c.ReportsComponent
        ),
    },

    
    {
      path: 'search',
      loadComponent: () =>
        import('./pages/dashboard/search/search.component').then(
          (c) => c.SearchComponent
        ),
    },
    {
      path: 'modal-content/:id',
      loadComponent: () =>
        import('./pages/dashboard/modal-content/modal-content.component').then(
          (t) => t.ModalContentComponent
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
      path: 'api',
      loadComponent: () =>
        import('./pages/dashboard/api/api.component').then(
          (c) => c.ApiComponent
        ),
    },
    {
      path: 'todo',
      loadComponent: () =>
        import('./pages/dashboard/todo/todo.component').then(
          (c) => c.TodoComponent
        ),
    },
 
    {
    path: 'edit/:id',
    loadComponent: () =>
      import('./pages/dashboard/user-edit/user-edit.component').then(c => c.UserEditComponent)
  },

    {
    path: 'parent',
    loadComponent: () =>
      import('./pages/dashboard/parent/parent.component').then(
        c => c.ParentComponent
      ),
  },

  {
    path: 'child', 
    loadComponent: () =>
      import('./pages/dashboard/child/child.component').then(
        c => c.ChildComponent
        
      ),
  },
  {
    path: 'products', 
    loadComponent: () =>
      import('./pages/dashboard/products/products.component').then(
        c => c.ProductsComponent
      ),
  },

   {
        path: 'employee',
        loadComponent: () =>
          import('./pages/settings/settings.component').then(
            (c) => c.SettingsComponent
          ),
      },

  ]

  }]
  
