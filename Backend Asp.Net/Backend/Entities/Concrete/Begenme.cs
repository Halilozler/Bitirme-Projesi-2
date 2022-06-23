using Backend.Core.Entities;

namespace Backend.Entities.Concrete
{
    public class Begenme : IEntity
    {
        public int id { get; set; }
        public int kim_User_id { get; set; }
        public int Post_id { get; set; }
    }
}
