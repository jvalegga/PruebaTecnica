import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmpleadoService} from 'src/app/services/empleado.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  ListaEmpleados : any[]=[];
  id: string | undefined;
  form: FormGroup;
  accion = 'Agregar';

  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    private _EmpleadoService: EmpleadoService) {
    this.form = this.fb.group({
      id_Empleado:  ['', [Validators.required, Validators.maxLength(10)]],
      nom_Empleado: [''],
      direccion:    [''],
      id_Entidad:   ['', [Validators.required, Validators.maxLength(10)]]
    })
   }

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  obtenerEmpleados() {
    this._EmpleadoService.getListEmpleados().subscribe(data => {
      console.log(data);
      this.ListaEmpleados = data;
    }, error => {
      console.log(error);
    })
  }

  guardarEmpleado() {

    const Empleado: any ={

     id_Empleado:  this.form.get('id_Empleado')?.value,
     nom_Empleado: this.form.get('nom_Empleado')?.value,
     direccion:    this.form.get('direccion')?.value,
     id_Entidad:   this.form.get('id_Entidad')?.value

    }

    if(this.id == undefined) {
      // Agregamos una nueva entidad
        this._EmpleadoService.saveEmpleado(Empleado).subscribe(data => {
          this.toastr.success('El Empleado fue registrado con exito!', 'Empleado Registrado');
          this.obtenerEmpleados();
          this.form.reset();
        }, error => {
          this.toastr.error('Ocurrio un error','Error')
          console.log(error);
        })
    }else {
		
      Empleado.id_Empleado = this.id;
      // Editamos entidad
      this._EmpleadoService.updateEmpleado(this.id,Empleado).subscribe(data => {
        this.form.reset();
        this.accion = 'Agregar';
        this.id = undefined;
        this.toastr.info('El Empleado fue actualizado con exito!', 'Empleado ActualizadO');
        this.obtenerEmpleados();
      }, error => {
        console.log(error);
      })
    }   
  }

  editarEmpleado(Empleado: any) {
    this.accion = 'Editar';
    this.id = Empleado.id_Empleado;

    this.form.patchValue({
     id_Empleado:  Empleado.id_Empleado,
     nom_Empleado: Empleado.nom_Empleado,
     direccion:    Empleado.direccion,
     id_Entidad:   Empleado.id_Entidad
    })
  }

  eliminarEmpleado(id: string) {
    this._EmpleadoService.deleteEmpleado(id).subscribe(data => {
      this.toastr.error('Registro Eliminado','Empleado Eliminado');
      this.obtenerEmpleados();
    }, error => {
      console.log(error);
    })
  }

}
