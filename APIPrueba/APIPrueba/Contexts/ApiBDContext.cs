using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using APIPrueba.Entities;

namespace APIPrueba.Contexts
{
    public class ApiBDContext:DbContext
    {
        public ApiBDContext(DbContextOptions<ApiBDContext> options): base(options)
        {

        }

        public DbSet<Entidades> Entidades { get; set; }

        public DbSet<Empleados> Empleados { get; set; }

    }
}
