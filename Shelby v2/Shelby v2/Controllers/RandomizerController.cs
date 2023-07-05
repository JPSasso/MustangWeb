using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Query.Internal;
using Shelby_v2.Models;

namespace Shelby_v2.Controllers
{
    public class RandomizerController : Controller
    {
        private readonly ShelbyContext _context;

        public RandomizerController(ShelbyContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetRandomMustang()
        { 
            int random = new Random().Next(1,7);
            Mustang mustang = _context.Mustangs.Where(m => m.Id == random).First();
            return RedirectToAction("Index", "mustang");
        }
        
    }
}
