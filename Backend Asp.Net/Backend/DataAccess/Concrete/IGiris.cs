using Backend.Entities.Concrete;
using Backend.Entities.DTOs;

namespace Backend.DataAccess.Concrete
{
    public interface IGiris
    {
        User Giris(GirisDTO user);
        User Kullanici_Adi_User(string kullanici_adi);
    }
}
