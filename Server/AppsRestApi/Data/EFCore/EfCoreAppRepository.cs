/* spiritdev Softwareentwicklung GmbH 2020
      Author Vladimir Kogan
*/
using AppsRestApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AppsRestApi.Data.EFCore
{
    public class EfCoreAppRepository : EfCoreRepository<App, RestApiContext>
    {
        public EfCoreAppRepository(RestApiContext context) : base(context)
        {

        }
      
    }
}
