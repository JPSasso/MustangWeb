using System;
using System.Collections.Generic;

namespace Shelby_v2.Models;

public partial class Generation
{
    public int GenId { get; set; }

    public string? GenerationName { get; set; }

    public virtual ICollection<Mustang> Mustangs { get; set; } = new List<Mustang>();
}
