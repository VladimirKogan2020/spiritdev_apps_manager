/* spiritdev Softwareentwicklung GmbH 2020
      Author Vladimir Kogan
*/
using AppsRestApi.Data;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AppsRestApi.Models
{
    public class App:IEntity
    {
        public int Id { get; set; }

        [Required]
        [StringLength(30, MinimumLength = 3)]
        public string Title { get; set; }

        [Required]
        public string Annotation { get; set; }


        [Required]
      
        public float Price { get; set; }

        [Required]
        public string Image { get; set; }

        [Required]
        public string Category { get; set; }

        [Required]
        public string Plattform { get; set; }

        [Required]
        public int SalesAmount { get; set; }

        [Required]
        [DataType(DataType.Date)]
        public DateTime ProjectStart { get; set; }

        [Required]
        [DataType(DataType.Date)]
        public DateTime ProjectEnd { get; set; }


    }
}
