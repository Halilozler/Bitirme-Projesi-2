using Backend.Entities.Concrete;
using Microsoft.EntityFrameworkCore;

namespace Backend.DataAccess
{
    public class AnimalousContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=sql.athena.domainhizmetleri.com,1433 (MS SQL Sunucusu);Database=haliloz1_deneme;User Id=haliloz1_1;Password='28nisan99'");
        }

        public DbSet<Begenme> tbl_Begenme { get; set; }
        public DbSet<Post> tbl_Post { get; set; }
        public DbSet<Yorum> tbl_Yorum { get; set; }
        public DbSet<User> tbl_User { get; set; }
        public DbSet<Bildirim> tbl_Bildirim { get; set; }
        public DbSet<Resim> tbl_Resim { get; set; }
    }
}
