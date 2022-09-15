using Microsoft.EntityFrameworkCore;
using Sorteio.Models;
using Sorteio.Map;

namespace Sorteio.Map
{
    public class SorteioDataContext : DbContext
    {
        public SorteioDataContext()
        {
        }

        public SorteioDataContext(DbContextOptions options) : base(options)
        {
            Database.Migrate();
        }

        public DbSet<Player> Players { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            base.OnConfiguring(options);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new PlayerMap());
            
        }
    }
}
