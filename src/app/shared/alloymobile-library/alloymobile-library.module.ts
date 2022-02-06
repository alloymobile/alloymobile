import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';

import { CrudComponent } from './ogranism/crud/crud.component';
import { IconComponent } from './cell/icon/icon.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TableComponent } from './tissue/table/table.component';
import { IconBarComponent } from './tissue/icon-bar/icon-bar.component';
import { PagignationComponent } from './tissue/pagignation/pagignation.component';
import { LoginComponent } from './ogranism/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './ogranism/register/register.component';
import { IconService } from '../services/icons/icon.service';
import { SearchBarComponent } from './tissue/search-bar/search-bar.component';
import { ItemUpdateComponent } from './tissue/item-update/item-update.component';

@NgModule({
  declarations: [
    CrudComponent,
    IconComponent,
    TableComponent,
    IconBarComponent,
    PagignationComponent,
    LoginComponent,
    RegisterComponent,
    SearchBarComponent,
    ItemUpdateComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatTooltipModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    IconComponent,
    CrudComponent,
    TableComponent,
    IconBarComponent,
    PagignationComponent,
    LoginComponent,
    RegisterComponent,
    SearchBarComponent,
    ItemUpdateComponent
  ],
  providers:[
    IconService
  ]
})
export class AlloymobileLibraryModule { }
