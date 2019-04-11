import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { ExpandableComponent } from '../expandable/expandable.component'
import { JokeContainerComponent } from '../joke-container/joke-container.component';
import { HeaderComponent } from '../header/header.component';
@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, ExpandableComponent, JokeContainerComponent, HeaderComponent]
})
export class HomePageModule {}
