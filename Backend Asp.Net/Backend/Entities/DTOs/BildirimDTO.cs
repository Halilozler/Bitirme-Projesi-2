using Backend.Core.Entities;

namespace Backend.Entities.DTOs
{
    public class BildirimDTO : IDto
    {
        public int id { get; set; }
        public string Ad { get; set; }
        public string Soyad { get; set; }
        public int post_id { get; set; }
        public int tur { get; set; }
        public Boolean Okundu { get; set; }
    }
}
