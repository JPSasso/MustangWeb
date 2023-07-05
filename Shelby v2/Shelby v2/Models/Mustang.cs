using System;
using System.Collections.Generic;

namespace Shelby_v2.Models;

public partial class Mustang
{
    public int Id { get; set; }

    public int? Year { get; set; }

    public int? Generation { get; set; }

    public string? Img1 { get; set; }

    public string? Img2 { get; set; }

    public string? EngineSound { get; set; }

    public int? TechnicalDatasheet { get; set; }

    public string? History { get; set; }

    public virtual Generation _generation { get; set; }

    public virtual TechnicalDatasheet _technicalDatasheet { get; set; }
}
