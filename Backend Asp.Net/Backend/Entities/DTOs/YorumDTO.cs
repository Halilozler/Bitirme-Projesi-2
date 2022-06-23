using Backend.Core.Entities;

namespace Backend.Entities.DTOs
{
    public class YorumDTO : IDto
    {
        public int id { get; set; }
        public int Post_id { get; set; }
        public string Text { get; set; }
        public int Kim_Yaptı_User_id { get; set; }
        public int resim { get; set; }
        public string Ad { get; set; }
        public string Soyad { get; set; }
    }
}
