using Backend.Entities.Concrete;
using Backend.Entities.DTOs;

namespace Backend.Businnes.Consrete
{
    public interface IGiris_UyeService
    {
        User Giris(string KullaniciAdi, string Sifre);
        void Uye(GirisDTO user);
        User KullaniciUser(string KullaniciAdi);
    }
}
