using Backend.Core.Entities;

namespace Backend.Entities.Concrete
{
    public class User : IEntity
    {
        public int id { get; set; }
        public string Kullanici_Adi { get; set; }
        public string Sifre { get; set; }
        public string Ad { get; set; }
        public string Soyad { get; set; }
        public int? Puan { get; set; }
        public int? Resim_id { get; set; }
        public Boolean? Cinsiyet { get; set; }
    }
}
