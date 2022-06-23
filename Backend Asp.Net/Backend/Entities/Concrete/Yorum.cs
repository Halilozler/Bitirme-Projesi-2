using Backend.Core.Entities;

namespace Backend.Entities.Concrete
{
    public class Yorum : IEntity
    {
        public int id { get; set; }
        public int Post_id { get; set; }
        public int Kim_Yapti_User_id { get; set; }
        public string Text { get; set; }
    }
}
