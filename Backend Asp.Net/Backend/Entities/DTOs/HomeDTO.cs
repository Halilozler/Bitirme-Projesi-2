using Backend.Core.Entities;

namespace Backend.Entities.DTOs
{
    public class HomeDTO : IDto
    {
        public int Post_id { get; set; }
        public int User_id { get; set; }
        public DateTime Tarih { get; set; }
        public string Ad { get; set; }
        public string Soyad { get; set; }
        public int? puan { get; set; }
        public string Yazi { get; set; }
        public int Yorum_sayisi { get; set; }
        public int Begeni_sayisi { get; set; }
        public Boolean begendi { get; set; }

    }
}
