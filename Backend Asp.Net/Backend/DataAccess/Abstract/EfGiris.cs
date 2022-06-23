using Backend.Core;
using Backend.DataAccess.Concrete;
using Backend.Entities.Concrete;
using Backend.Entities.DTOs;

namespace Backend.DataAccess.Abstract
{
    public class EfGiris : IGiris
    {
        public User Giris(GirisDTO user)
        {
            User kullanici = EF.Get<User>(x => x.Kullanici_Adi == user.Kullanici_Adi && x.Sifre == user.Sifre);
            if(kullanici == null) return null;
            return kullanici;
        }

        public User Kullanici_Adi_User(string kullanici_adi)
        {
            return (EF.Get<User>(x => x.Kullanici_Adi == kullanici_adi));
        }
    }
}
