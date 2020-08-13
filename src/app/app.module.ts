import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { AddHostDirective } from './add-host.directive';
import { TableauStackComponent } from './tableau-stack/tableau-stack.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TableComponent } from './table/table.component';
import { FoundationStackComponent } from './foundation-stack/foundation-stack.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    AddHostDirective,
    TableauStackComponent,
    TableComponent,
    FoundationStackComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
