import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { AcountSettingsComponent } from './acount-settings/acount-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';



const routes: Routes = [

    {
        path: 'dashboard', 
        component: PagesComponent,
        children:[
          { path: '', component: DashboardComponent, data:{titulo: 'Dashboard'} },
          { path: 'progress', component: ProgressComponent, data:{titulo: 'Progress Bar'}},
          { path: 'acount-setting', component: AcountSettingsComponent, data:{titulo: 'Acount Setting'}},
          { path: 'promesas', component: PromesasComponent, data:{titulo: 'Promises'}},
          { path: 'rxjs', component: RxjsComponent, data:{titulo: 'RXJS'}},
         
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
