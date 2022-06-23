using System.Net;
using System.Text.Json.Serialization;
using Backend.Entities.DTOs;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace Backend.Controllers
{
    [Route("api/yardim")]
    [ApiController]
    public class YardimController : Controller
    {
        private readonly string apiKey = "";
        private readonly string cx = "";

        [HttpGet("bot/{text}")]
        public IActionResult Bot(string text)
        {
            var request = WebRequest.Create("https://www.googleapis.com/customsearch/v1?key=" + apiKey + "&cx=" + cx + "&q=" + text);
            HttpWebResponse response = (HttpWebResponse)request.GetResponse();
            Stream dataStream = response.GetResponseStream();
            StreamReader reader = new StreamReader(dataStream);
            string responseString = reader.ReadToEnd();
            dynamic jsonData = JsonConvert.DeserializeObject<dynamic>(responseString);

            var results = new List<SiteDTO>();
            try
            {
                foreach (var item in jsonData.items)
                {
                    results.Add(new SiteDTO
                    {
                        Title = item.title,
                        Link = item.link,
                        Snippet = item.snippet
                    });
                }
            }
            catch (Exception e)
            {
                return NotFound();
            }
            
            return Ok(results.ToList()[1]);
        }
    }
}
