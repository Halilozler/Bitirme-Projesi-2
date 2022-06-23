using Backend.Core.Entities;

namespace Backend.Entities.Concrete
{
    public class Post : IEntity
    {
        public int id { get; set; }
        public DateTime Olusturulma_Tarih { get; set; }
        public int Kim_olusturdu_User_id { get; set; }
        public string Yazi { get; set; }
        public int Gelen_Yorum_Sayisi { get; set; }
        public int Gelen_Begeni_Sayisi { get; set; }
    }
}
