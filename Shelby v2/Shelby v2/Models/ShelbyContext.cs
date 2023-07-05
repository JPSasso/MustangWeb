using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Shelby_v2.Models;

public partial class ShelbyContext : DbContext
{
    public ShelbyContext()
    {
    }

    public ShelbyContext(DbContextOptions<ShelbyContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Generation> Generations { get; set; }

    public virtual DbSet<Mustang> Mustangs { get; set; }

    public virtual DbSet<TechnicalDatasheet> TechnicalDatasheets { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer("Data Source=.;Initial Catalog=Shelby;Integrated Security=True;Persist Security Info=False;Pooling=False;Multiple Active Result Sets=False;Encrypt=False;Trust Server Certificate=False");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Generation>(entity =>
        {
            entity.HasKey(e => e.GenId).HasName("PK_Generations");

            entity.ToTable("Generation");

            entity.Property(e => e.GenId).ValueGeneratedNever();
            entity.Property(e => e.GenerationName)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("Generation");
        });

        modelBuilder.Entity<Mustang>(entity =>
        {
            entity.ToTable("Mustang");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.EngineSound)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("engineSound");
            entity.Property(e => e.History)
                .HasMaxLength(2000)
                .IsUnicode(false);
            entity.Property(e => e.Img1)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("img1");
            entity.Property(e => e.Img2)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("img2");
            entity.Property(e => e._generation).HasColumnName("technicalDatasheet");

            entity.HasOne(d => d._generation).WithMany(p => p.Mustangs)
                .HasForeignKey(d => d._generation)
                .HasConstraintName("FK_Mustang_Generation");

            entity.HasOne(d => d._technicalDatasheet).WithMany(p => p.Mustangs)
                .HasForeignKey(d => d._technicalDatasheet)
                .HasConstraintName("FK_Mustang_TechnicalDatasheet");
        });

        modelBuilder.Entity<TechnicalDatasheet>(entity =>
        {
            entity.HasKey(e => e.Tdid);

            entity.ToTable("TechnicalDatasheet");

            entity.Property(e => e.Tdid).HasColumnName("TDId");
            entity.Property(e => e.Breaks)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Distance)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Engine)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Longitude)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Power)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Suspension)
                .HasMaxLength(200)
                .IsUnicode(false);
            entity.Property(e => e.Transmission)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Weight)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Wheels)
                .HasMaxLength(150)
                .IsUnicode(false);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
