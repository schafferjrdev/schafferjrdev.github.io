import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NumberPickerModule} from 'ng-number-picker';

import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatToolbarModule,
  MatTabsModule,
  MatExpansionModule,
  MatCheckboxModule,
  MatChipsModule,
  MatCardModule,
  MatButtonToggleModule,
  MatDialogModule,
  MatRippleModule,
  MatProgressBarModule,
  MatSelectModule
  
} from '@angular/material';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    TodoComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FlexLayoutModule,
    MatTabsModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatSelectModule,
    MatChipsModule,
    MatCardModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatRippleModule,
    MatProgressBarModule,
    NumberPickerModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
