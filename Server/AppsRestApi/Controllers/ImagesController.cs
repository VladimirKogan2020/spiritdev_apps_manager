using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;



// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AppsRestApi.Controllers
{

    //[Route("api/[controller]")]
    [Route("api/images")]
    [ApiController]
    public class ImageController : Controller
    {
        public static IWebHostEnvironment _environment;
        public ImageController(IWebHostEnvironment environment)
        {
            _environment = environment;
        }
        public class FIleUploadAPI
        {
            public IFormFile files
            {
                get;
                set;
            }
        }

        [HttpPost("UploadFile")]
        public IActionResult UploadFile(IFormFile file)
        => Ok(file.Length);

         [HttpPost]

        public async Task<ActionResult<string>> Create()//Task<IActionResult> Create()
        {

            var image = Request.Body;

            //using (var memoryStream = new MemoryStream())
            //{
            //    await image.CopyToAsync(memoryStream);
            //    using ( img = Image.Jpeg(memoryStream))
            //    {
            //        // TODO: ResizeImage(img, 100, 100);
            //    }
            //}



            //var fileName = Path.GetFileName(image.FileName);
            //var filePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot\\images\\items", fileName);
            //using (var fileSteam = new FileStream(filePath, FileMode.Create))
            //{
            //    await image.CopyToAsync(fileSteam);

            //}

            // return image.FileName;
            // return RedirectToAction(nameof(Index));
            return "success";


        }



      //  [HttpPost]
        public async Task<ActionResult<string>> Post()
        {
            IFormFile files = Request.Form.Files[0];
            if (files != null && files.Length > 0)
            {
                try
                {
                    if (!Directory.Exists(AppDomain.CurrentDomain.BaseDirectory + "\\uploads\\"))//(_environment.WebRootPath + "\\uploads\\"))
                    {
                        Directory.CreateDirectory(AppDomain.CurrentDomain.BaseDirectory + "\\uploads\\");//(_environment.WebRootPath + "\\uploads\\");
                    }
                    using (FileStream filestream = System.IO.File.Create(AppDomain.CurrentDomain.BaseDirectory + "\\uploads\\" + files.FileName)) // (_environment.WebRootPath + "\\uploads\\" + files.FileName))
                    {
                        files.CopyTo(filestream);
                        filestream.Flush();
                        return "\\uploads\\" + files.FileName;
                    }
                }
                catch (Exception ex)
                {
                    return ex.ToString();
                }
            }
            else
            {
                return "Unsuccessful";
            }

        }

        //[HttpPost]
        //public async Task<ActionResult<string>> Post()
        //{
        //    var files = Request.Form.Files;
        //    return "TEST-POST";

        //}

        [HttpGet]
        public string Get()
        {
            return "TEST-Images";
        }

     //  [HttpPost]
        public ActionResult Post([FromForm(Name = "file")] IFormFile file)
        {
            try
            {
                if (file != null)
                {
                    ; Console.WriteLine(file.FileName);
                }
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}

