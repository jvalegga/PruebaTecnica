using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace APIPrueba.Entities
{
    public class Empleados
    {
        [Key]
        public string Id_Empleado { get; set; }

        public string Nom_Empleado { get; set; }

        public string Direccion { get; set; }

        public string Id_Entidad { get; set; }


    }
}
