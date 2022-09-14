using Microsoft.EntityFrameworkCore;
using Sorteio.Models;
using Sorteio.Map;

namespace Sorteio.Map
{
    public class SorteioDataContext : DbContext
    {
        public DbSet<Player> Players { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
            => options.UseSqlServer("Server=localhost,1433;Database=StaTereza;User ID=sa;Password=1q2w3e4r@#$");

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new PlayerMap());
            
        }
    }
}
