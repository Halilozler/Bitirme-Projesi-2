using Backend.Core;
using Backend.DataAccess.Concrete;
using Backend.Entities.Concrete;
using Backend.Entities.DTOs;

namespace Backend.DataAccess.Abstract
{
    public class EfRegister : IRegister
    {
        public void UyeOl(GirisDTO user)
        {
            User kullanici = EF.Get<User>(x => x.Kullanici_Adi == user.Kullanici_Adi);
            if (kullanici != null) return;

            kullanici = new User
            {
                Kullanici_Adi = user.Kullanici_Adi,
                Sifre = user.Sifre,
                Ad = user.Ad,
                Soyad = user.Soyad,
                Cinsiyet = user.Cinsiyet,
                Puan = 0,
                Resim_id = 1
            };
            EF.Add<User>(kullanici);
        }
    }
}
