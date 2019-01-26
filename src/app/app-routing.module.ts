import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { CycleListComponent } from './cycles/cycle-list/cycle-list.component';
// import { SequenceListComponent } from './sequences/sequence-list/sequence-list.component';
// import { MessageListComponent } from './messages/message-list/message-list.component';

const routes: Routes = [
  {
    path: 'cycles',
        // component: CycleListComponent
loadChildren: './cycles/cycles.module#CyclesModule'
  },
  {
    path: 'sequences',
       // component: SequenceListComponent
  loadChildren: './sequences/sequences.module#SequencesModule'
  },
  {
    path: 'messages',
       // component: MessageListComponent
 loadChildren: './messages/messages.module#MessagesModule'
  },

  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
