import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveComponent } from './reactive/reactive.component';
import {TemplateModelComponent} from './template-model/template-model.component';
import { ReactiveStatusComponent } from './reactive-status/reactive-status.component';
import { TemplateModelStatusComponent } from './template-model-status/template-model-status.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { NestedFormArrayComponent } from './nested-form-array/nested-form-array.component';
import { PatchSetFormArrayComponent } from './patch-set-form-array/patch-set-form-array.component';
// import { TemplateModelComponent } from './template-model/template-model.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveComponent,
    TemplateModelComponent,
    ReactiveStatusComponent,
    TemplateModelStatusComponent,
    FormArrayComponent,
    NestedFormArrayComponent,
    PatchSetFormArrayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
