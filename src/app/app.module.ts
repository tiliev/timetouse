import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TimeModule } from './time/time.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxElectronModule } from 'ngx-electron';

// import { MessageListComponent } from './messages/message-list/message-list.component';
// import { CycleListComponent } from './cycles/cycle-list/cycle-list.component';
// import { SequenceListComponent } from './sequences/sequence-list/sequence-list.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule, MatCardModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';


@NgModule({
  declarations: [
    AppComponent
    // MessageListComponent,
    // CycleListComponent,
    // SequenceListComponent
  ],
  imports: [
    BrowserModule,
    TimeModule,
    AppRoutingModule,
    NgxElectronModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTabsModule,
    MatMenuModule,
    MatGridListModule,
    MatCardModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
