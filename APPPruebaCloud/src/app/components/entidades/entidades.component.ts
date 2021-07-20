import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EntidadService } from 'src/app/services/entidad.service';

@Component({
  selector: 'app-entidades',
  templateUrl: './entidades.component.html',
  styleUrls: ['./entidades.component.css']
})

export class EntidadesComponent implements OnInit {
  ListaEntidades : any[]=[];
  id: string | undefined;
  form: FormGroup;
  accion = 'Agregar';

  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    private _EntidadService: EntidadService) {
    this.form = this.fb.group({
      id_Entidad: ['', [Validators.required, Validators.maxLength(10)]],
      nom_Entidad: [''],
      direccion: ['']
    })
   }

   

  ngOnInit(): void {
    this.obtenerEntidades();
  }

  obtenerEntidades() {
    this._EntidadService.getListEntidades().subscribe(data => {
      console.log(data);
      this.ListaEntidades = data;
    }, error => {
      console.log(error);
    })
  }

  guardarEntidad() {

    const Entidad: any ={
     id_Entidad: this.form.get('id_Entidad')?.value,
     nom_Entidad: this.form.get('nom_Entidad')?.value,
     direccion : this.form.get('direccion')?.value,

    }

    if(this.id == undefined) {
      // Agregamos una nueva entidad
        this._EntidadService.saveEntidad(Entidad).subscribe(data => {
          this.toastr.success('La Entidad fue registrada con exito!', 'Entidad Registrada');
          this.obtenerEntidades();
          this.form.reset();
        }, error => {
          this.toastr.error('Ocurrio un error','Error')
          console.log(error);
        })
    }else {
		
      Entidad.id_Entidad = this.id;
      // Editamos entidad
      this._EntidadService.updateEntidad(this.id,Entidad).subscribe(data => {
        this.form.reset();
        this.accion = 'Agregar';
        this.id = undefined;
        this.toastr.info('La Entidad fue actualizada con exito!', 'Entidad Actualizada');
        this.obtenerEntidades();
      }, error => {
        console.log(error);
      })
    }   
  }

  eliminarEntidad(id: string) {
    this._EntidadService.deleteEntidad(id).subscribe(data => {
      this.toastr.error('Registro Eliminado','Entidad Eliminada');
      this.obtenerEntidades();
    }, error => {
      console.log(error);
    })
  }

  editarEntidad(Entidad: any) {
    this.accion = 'Editar';
    this.id = Entidad.id_Entidad;

    this.form.patchValue({
      id_Entidad: Entidad.id_Entidad,
      nom_Entidad: Entidad.nom_Entidad,
      direccion: Entidad.direccion
    })
  }

}
