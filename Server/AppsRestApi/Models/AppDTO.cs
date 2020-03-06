/* spiritdev Softwareentwicklung GmbH 2020
      Author Vladimir Kogan
*/
using AppsRestApi.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AppsRestApi.Models
{
    public class AppDTO:IEntity
    {
        public static void DtoToApp(AppDTO dto, App app)
        {            
            app.Annotation = dto.Annotation;
            app.Category = dto.Category;
            app.Id = dto.Id;
            app.Image = dto.Image;
            app.Plattform = dto.Plattform;
            app.Price = dto.Price;
            app.SalesAmount = dto.SalesAmount;
            app.Title = dto.Title;
            app.ProjectStart= new DateTime(1970, 1, 1, 0, 0, 0, 0).AddMilliseconds(dto.ProjectStart).ToLocalTime();
            app.ProjectEnd = new DateTime(1970, 1, 1, 0, 0, 0, 0).AddMilliseconds(dto.ProjectEnd).ToLocalTime();
           
        }

        public static double DateTimeToUnixTimestamp(DateTime dateTime)
        {
            return (TimeZoneInfo.ConvertTimeToUtc(dateTime) -
                   new DateTime(1970, 1, 1, 0, 0, 0, 0, System.DateTimeKind.Utc)).TotalMilliseconds;
        }
        public static AppDTO AppToDto(App app)
        {
            AppDTO dto = new AppDTO();

            dto.Annotation = app.Annotation;
            dto.Category = app.Category;
            dto.Id = app.Id;
            dto.Image = app.Image;
            dto.Plattform = app.Plattform;
            dto.Price = app.Price;
            dto.SalesAmount = app.SalesAmount;
            dto.Title = app.Title;
            dto.ProjectStart = AppDTO.DateTimeToUnixTimestamp(app.ProjectStart);
            dto.ProjectEnd = AppDTO.DateTimeToUnixTimestamp(app.ProjectEnd);

            return dto;
        }
        public int Id { get; set; }

        
        public string Title { get; set; }

      
        public string Annotation { get; set; }



        public float Price { get; set; }

       
        public string Image { get; set; }

   
        public string Category { get; set; }

        
        public string Plattform { get; set; }

    
        public int SalesAmount { get; set; }

       
        public double ProjectStart { get; set; }

      
        public double ProjectEnd { get; set; }
    }
}
