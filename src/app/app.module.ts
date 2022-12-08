import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FotografiaModule } from './fotografia/fotografia.module';
import { CoreModule } from './core-header/core.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    CoreModule,
    FotografiaModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
