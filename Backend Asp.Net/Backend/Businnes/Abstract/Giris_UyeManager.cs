using Backend.Businnes.Consrete;
using Backend.DataAccess.Abstract;
using Backend.DataAccess.Concrete;
using Backend.Entities.Concrete;
using Backend.Entities.DTOs;

namespace Backend.Businnes.Abstract
{
    public class Giris_UyeManager : IGiris_UyeService
    {
        private IGiris _giris;
        private IRegister _uye;
        public Giris_UyeManager()
        {
            _giris = new EfGiris();
            _uye = new EfRegister();
        }
        
        public User Giris(string KullaniciAdi, string Sifre)
        {
            GirisDTO user = new GirisDTO{ Kullanici_Adi = KullaniciAdi, Sifre = Sifre};
            return _giris.Giris(user);
        }

        public void Uye(GirisDTO user)
        {
            _uye.UyeOl(user);
        }

        public User KullaniciUser(string KullaniciAdi)
        {
            return _giris.Kullanici_Adi_User((KullaniciAdi));
        }
    }
}
