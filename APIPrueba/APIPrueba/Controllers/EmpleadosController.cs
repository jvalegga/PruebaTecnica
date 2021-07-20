using APIPrueba.Contexts;
using APIPrueba.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace APIPrueba.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmpleadosController : ControllerBase
    {
        private readonly ApiBDContext context;
        public EmpleadosController(ApiBDContext context)
        {
            this.context = context;
        }


        // GET: api/<EmpleadosController>
        [HttpGet]
        public IEnumerable<Empleados> Get()
        {
            return context.Empleados.ToList(); ;
        }

        // GET api/<EmpleadosController>/5
        [HttpGet("{id}")]
        public Empleados Get(string id)
        {
            var Empleado = context.Empleados.FirstOrDefault(p => p.Id_Empleado == id);
            return Empleado;
        }

        // POST api/<EmpleadosController>
        [HttpPost]
        public ActionResult Post([FromBody] Empleados Empleado)
        {
            try
            {
                context.Empleados.Add(Empleado);
                context.SaveChanges();
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }

        // PUT api/<EmpleadosController>/5
        [HttpPut("{id}")]
        public ActionResult Put(string id, [FromBody] Empleados Empleado)
        {
            try
            {
                if (Empleado.Id_Empleado == id)
                {
                    context.Entry(Empleado).State = EntityState.Modified;
                    context.SaveChanges();
                    return Ok();
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }

        // DELETE api/<EmpleadosController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(string id)
        {
            try
            {
                var Empleado = context.Empleados.FirstOrDefault(p => p.Id_Empleado == id);

                if (Empleado != null)
                {
                    context.Empleados.Remove(Empleado);
                    context.SaveChanges();
                    return Ok();
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }
    }
}
