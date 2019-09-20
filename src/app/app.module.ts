import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ChildComponent } from './child/child.component';
import { CentreComponent } from './centre/centre.component';
import { HolderComponent } from './holder/holder.component';
import { CentralComponent } from './central/central.component';
import { CalenderComponent } from './calender/calender.component';
import { FooterComponent } from './footer/footer.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { Central1Component } from './central1/central1.component';
import { Central2Component } from './central2/central2.component';
import { Central3Component } from './central3/central3.component';
import { Central4Component } from './central4/central4.component';
import { Central5Component } from './central5/central5.component';
import {MatButtonModule}  from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    CentreComponent,
    HolderComponent,
    CentralComponent,
    CalenderComponent,
    FooterComponent,
    Central1Component,
    Central2Component,
    Central3Component,
    Central4Component,
    Central5Component,
    MatButtonModule,
    MatCheckboxModule

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
