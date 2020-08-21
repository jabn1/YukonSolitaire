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
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { RulesComponent } from './rules/rules.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    AddHostDirective,
    TableauStackComponent,
    TableComponent,
    FoundationStackComponent,
    MenuComponent,
    RulesComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
