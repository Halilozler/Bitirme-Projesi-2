using Backend.Core.Entities;

namespace Backend.Entities.Concrete
{
    public class Bildirim : IEntity
    {
        public int id { get; set; }
        public int kim_yorum_yaptı_User_id { get; set; }
        public int Kime_user_id { get; set; }
        public int Tur { get; set; }
        public int Post_id { get; set; }
        public Boolean Okundu { get; set; }

    }
}
