import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TusVehiculosFormPage } from './tus-vehiculos-form';

@NgModule({
  declarations: [
    TusVehiculosFormPage,
  ],
  imports: [
    IonicPageModule.forChild(TusVehiculosFormPage),
  ],
})
export class TusVehiculosFormPageModule {}
