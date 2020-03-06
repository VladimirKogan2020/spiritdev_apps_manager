/* spiritdev Softwareentwicklung GmbH 2020
      Author Vladimir Kogan
*/
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace AppsRestApi.Data.EFCore
{
    public class RestApiContext : DbContext
    {
        public RestApiContext (DbContextOptions<RestApiContext> options)
            : base(options)
        {
        }

        public DbSet<AppsRestApi.Models.App> App { get; set; }
    }
}
