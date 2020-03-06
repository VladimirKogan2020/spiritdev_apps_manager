/* spiritdev Softwareentwicklung GmbH 2020
      Author Vladimir Kogan
*/
using AppsRestApi.Data;
using AppsRestApi.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace AppsRestApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public abstract class BaseController<TEntity, TRepository> : ControllerBase
        where TEntity : class, IEntity
        where TRepository : IRepository<TEntity>
    {
        private readonly TRepository repository;

        public BaseController(TRepository repository)
        {
            this.repository = repository;
        }


        public async Task<ActionResult<IEnumerable<TEntity>>> Get()
        {          
            return await repository.GetAll();
        }

       
        public async Task<ActionResult<TEntity>> Get(int id)
        {
            var app = await repository.Get(id);
            if (app == null)
            {
                return NotFound();
            }
            return app;
        }

      
        public async Task<ActionResult<TEntity>> Put(int id, TEntity app)
        {
            if (id != app.Id)
            {
                return BadRequest();
            }
            await repository.Update(app);
            return app;

        }

      
        public async Task<ActionResult<TEntity>> Post(TEntity app)
        {
            await repository.Add(app);
            return CreatedAtAction("Get", new { id = app.Id }, app);
        }

        // DELETE: api/[controller]/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<TEntity>> Delete(int id)
        {
            var app = await repository.Delete(id);
            if (app == null)
            {
                return NotFound();
            }
            return app;
        }

       

    }
}
