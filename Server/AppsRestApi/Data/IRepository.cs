
/* spiritdev Softwareentwicklung GmbH 2020
      Author Vladimir Kogan
*/
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AppsRestApi.Data
{
   
        public interface IRepository<T> where T : class, IEntity
        {
            Task<List<T>> GetAll();
            Task<T> Get(int id);
            Task<T> Add(T entity);
            Task<T> Update(T entity);
            Task<T> Delete(int id);
        }
   
}
