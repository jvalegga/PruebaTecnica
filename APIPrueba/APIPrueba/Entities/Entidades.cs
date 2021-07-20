using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace APIPrueba.Entities
{
    public class Entidades
    {
        [Key]
        public string Id_Entidad { get; set; }

        public string Nom_Entidad { get; set; }

        public string Direccion { get; set; }
    }
}
