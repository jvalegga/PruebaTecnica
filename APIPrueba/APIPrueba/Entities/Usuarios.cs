using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace APIPrueba.Entities
{
    public class Usuarios
    {
        [Key]
        public int Id { get; set; }

        public string Usuario { get; set; }

        public string Password { get; set; }
    }
}
