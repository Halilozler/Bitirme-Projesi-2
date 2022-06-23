using Backend.Businnes.Abstract;
using Backend.Businnes.Consrete;
using Backend.Entities.Concrete;
using Backend.Entities.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [Route("api/home")]
    [ApiController]
    public class HomeController : Controller
    {
        private readonly IHomeService _service;

        public HomeController()
        {
            _service = new HomeManager();
        }
        [HttpGet("user/{user_id}")]
        public IActionResult User(int user_id)
        {
            return Ok(_service.user(user_id));
        }
        [HttpGet("anasayfa/{user_id}")]
        public IActionResult Anasayfa(int user_id)
        {
            return Ok(_service.GetAll(user_id));
        }
        [HttpGet("getPost/{post_id}/{user_id}")]
        public IActionResult GetPost(int post_id, int user_id)
        {
            return Ok(_service.GetSinglePost(post_id,0, user_id));
        }
        [HttpGet("getBildirimPost/{bildirim_id}/{kim_bakiyor}")]
        public IActionResult GetBildirimPost(int bildirim_id, int kim_bakiyor)
        {
            return Ok(_service.GetSinglePost(bildirim_id,1, kim_bakiyor));
        }
        [HttpGet("getUserPost/{user_id}/{kim_bakiyor}")]
        public IActionResult GetUserPost(int user_id, int kim_bakiyor)
        {
            return Ok(_service.GetUserPost(user_id, kim_bakiyor));
        }
        [HttpGet("ekle/{olusturan_id}/{Text}")]
        public IActionResult Ekle(int olusturan_id, string Text)
        {
            Post post = new Post();
            post.Kim_olusturdu_User_id = olusturan_id;
            post.Yazi = Text;
            post.Olusturulma_Tarih = DateTime.Now;
            post.Gelen_Begeni_Sayisi = 0;
            post.Gelen_Yorum_Sayisi = 0;
            _service.AddPost(post);
            return Ok();
        }
        [HttpGet("begen/{post_id}/{kim_user_id}")]
        public IActionResult Begen(int post_id, int kim_user_id)
        {
            _service.Begen(post_id, kim_user_id);
            return Ok();
        }
        [HttpGet("yorumlar/{post_id}")]
        public IActionResult Yorumlar(int post_id)
        {
            return Ok(_service.GetYorum(post_id));
        }
        [HttpGet("bildirim/{user_id}")]
        public IActionResult Bildirim(int user_id)
        {
            return Ok(_service.getBildirim(user_id));
        }
        [HttpGet("tiklandi/{bildirim_id}")]
        public IActionResult Tiklandi(int bildirim_id)
        {
            _service.Tiklandi(bildirim_id);
            return Ok();
        }
        [HttpGet("yorumYap/{post_id}/{Kim_yapti_user_id}/{text}")]
        public IActionResult YorumYap(int post_id, int Kim_yapti_user_id, string text)
        {
            YorumDTO yorumDto = new YorumDTO
            {
                Post_id = post_id,
                Kim_Yaptı_User_id = Kim_yapti_user_id,
                Text = text
            };
            _service.YorumYap(yorumDto);
            return Ok();
        }
    }
}
