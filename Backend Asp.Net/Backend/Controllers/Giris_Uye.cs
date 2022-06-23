using Backend.Businnes.Abstract;
using Backend.Businnes.Consrete;
using Backend.Core;
using Backend.Entities.Concrete;
using Backend.Entities.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [Route("api/GirisUye")]
    [ApiController]
    public class Giris_Uye : Controller
    {
        private readonly IGiris_UyeService _kullanici;

        public Giris_Uye()
        {
            _kullanici = new Giris_UyeManager();
        }

        [HttpGet("Giris/{KullaniciAdi}/{Sifre}")]
        public IActionResult Giris(string KullaniciAdi, string Sifre)
        {
            User kullanici = _kullanici.Giris(KullaniciAdi, Sifre);
            if (kullanici == null) return BadRequest(401);
            return Ok(kullanici);
        }

        [HttpPost("Uye")]
        public IActionResult Uye(GirisDTO user)
        {
            _kullanici.Uye(user);
            return Ok();
        }

        [HttpGet("GirisKullaniciAdi/{KullaniciAdi}")]
        public IActionResult GirisKullaniciAdi(string KullaniciAdi)
        {
            User kullanici = _kullanici.KullaniciUser(KullaniciAdi);
            if (kullanici == null) return BadRequest(401);
            return Ok(kullanici);
        }
    }
}
