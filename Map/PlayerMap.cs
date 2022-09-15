using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Sorteio.Models;

namespace Sorteio.Map
{
    public class PlayerMap : IEntityTypeConfiguration<Player>
    {
        public void Configure(EntityTypeBuilder<Player> builder)
        {
            builder.ToTable("Player");
            builder.HasKey(x => x.Id);

            builder.Property(x => x.Id)
                .ValueGeneratedOnAdd()
                .UseIdentityColumn();

            builder.Property(x => x.Name)
                .IsRequired()
                .HasColumnName("Name")
                .HasColumnType("NVARCHAR")
                .HasMaxLength(30);

            builder.Property(x => x.Level)
                .IsRequired()
                .HasColumnName("Level")
                .HasColumnType("VARCHAR")
                .HasMaxLength(1);

            builder.Property(x => x.Position)
                .IsRequired()
                .HasColumnName("Position")
                .HasColumnType("SMALLINT")
                .HasMaxLength(1);
        }
    }
}
