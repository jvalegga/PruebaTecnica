using APIPrueba.Contexts;
using APIPrueba.Entities;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace APIPrueba.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EntidadesController : ControllerBase
    {
        private readonly ApiBDContext context;
        public EntidadesController(ApiBDContext context)
        {
            this.context = context;
        }


        // GET: api/<EntidadesController>
        [HttpGet]
        public IEnumerable<Entidades> Get()
        {
            return context.Entidades.ToList();
        }

        // GET api/<EntidadesController>/5
        [HttpGet("{id}")]
        public Entidades Get(string id)
        {
            var Entidad = context.Entidades.FirstOrDefault(p => p.Id_Entidad == id);
            return Entidad;
        }

        // POST api/<EntidadesController>
        [HttpPost]
        public ActionResult Post([FromBody] Entidades Entidad)
        {
            try
            {
                context.Entidades.Add(Entidad);
                context.SaveChanges();
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest();
            }

        }

        // PUT api/<EntidadesController>/5
        [HttpPut("{id}")]
        public ActionResult Put(string id, [FromBody] Entidades Entidad)
        {
            try
            {
                if (Entidad.Id_Entidad == id)
                {
                    context.Entry(Entidad).State = EntityState.Modified;
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

        // DELETE api/<EntidadesController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(string id)
        {
            try
            {
                var Entidad = context.Entidades.FirstOrDefault(p => p.Id_Entidad == id);

                if (Entidad != null)
                {
                    context.Entidades.Remove(Entidad); 
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
