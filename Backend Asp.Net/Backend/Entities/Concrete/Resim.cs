using Backend.Core.Entities;

namespace Backend.Entities.Concrete
{
    public class Resim : IEntity
    {
        public int id { get; set; }
        public string url { get; set; }
    }
}
