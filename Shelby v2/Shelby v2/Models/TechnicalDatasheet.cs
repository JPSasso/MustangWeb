using System;
using System.Collections.Generic;

namespace Shelby_v2.Models;

public partial class TechnicalDatasheet
{
    public int Tdid { get; set; }

    public string? Engine { get; set; }

    public string? Longitude { get; set; }

    public string? Distance { get; set; }

    public string? Weight { get; set; }

    public string? Power { get; set; }

    public string? Breaks { get; set; }

    public string? Wheels { get; set; }

    public string? Transmission { get; set; }

    public string? Suspension { get; set; }

    public virtual ICollection<Mustang> Mustangs { get; set; } = new List<Mustang>();
}
