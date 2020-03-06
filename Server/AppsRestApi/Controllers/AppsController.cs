/* spiritdev Softwareentwicklung GmbH 2020
      Author Vladimir Kogan
*/
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AppsRestApi.Models;
using AppsRestApi.Data.EFCore;

namespace AppsRestApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppsController : BaseController<App, EfCoreAppRepository>
    {
        public AppsController(EfCoreAppRepository repository) : base(repository)
        {

        }


        // GET: api/[controller]/5
        [HttpGet("{id}")]
        public AppDTO GetAppDTO(int id)
        {
        
            return  AppDTO.AppToDto(Get(id).Result.Value);
        }

        // GET: api/[controller]
         [HttpGet]
        public List<AppDTO> GetAppDTO()          
        {
            var a = Get().Result.Value.ToList();
            List<AppDTO> b = new List<AppDTO>();
            a.ForEach(item =>b.Add( AppDTO.AppToDto(item)));
            return b;
            
        }

        // PUT: api/[controller]/5
        [HttpPut("{id}")]
        public AppDTO PutAppDTO(int id, AppDTO dto)
        {
            App a = Get(id).Result.Value;
              AppDTO.DtoToApp(dto, a);
            return AppDTO.AppToDto( Put(id,a).Result.Value);
        }
        // PUT: api/[controller]
        [HttpPost]
        public async Task<AppDTO> PostAppDTO(AppDTO dto)
        {
            App app = new App();
            AppDTO.DtoToApp(dto, app);
            await Post(app);
            dto.Id = app.Id;
            return dto;
        }
    }
}
