using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Shelby_v2.Models;

namespace Shelby_v2.Controllers
{
    public class MustangController : Controller
    {
        private readonly ShelbyContext _context;

        public MustangController (ShelbyContext context)
        {
            _context = context;
        }   

        public IActionResult Index()
        {
            int random = new Random().Next(1, 7);
            Mustang mustang = _context.Mustangs.Where(m => m.Id == random).First();
            mustang._generation = _context.Generations.Where(g => g.GenId == mustang.Generation).First();
            return View(mustang);
        }
    }
}
