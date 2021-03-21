import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StarsComponent } from './stars.component';

@NgModule({
  declarations: [
    StarsComponent
  ],
  imports: [
    FontAwesomeModule
  ],
  exports: [
    StarsComponent
  ]
})
export class StarsModule {}
