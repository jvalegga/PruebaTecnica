import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { EntidadesComponent } from './components/entidades/entidades.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,Routes } from '@angular/router';

const rutas: Routes =[

  {
    path: 'entidades',
    component: EntidadesComponent
  },
  {
    path: 'empleados',
    component: EmpleadosComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    EntidadesComponent,
    EmpleadosComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(rutas, {
      enableTracing: true,

    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
