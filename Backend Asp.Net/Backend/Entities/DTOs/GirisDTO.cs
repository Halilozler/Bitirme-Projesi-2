using Backend.Core.Entities;

namespace Backend.Entities.DTOs
{
    public class GirisDTO : IDto
    {
        public string Kullanici_Adi { get; set; }
        public string Sifre { get; set; }
        public string? Ad { get; set; }
        public string? Soyad { get; set; }
        public Boolean? Cinsiyet { get; set; }
    }
}
