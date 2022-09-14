using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Sorteio.Models;
using Sorteio.Map;

namespace Sorteio.Controllers
{
    [ApiController]
    [Route("home")]
    public class HomeController : ControllerBase
    {
        [HttpGet("")]
        public IActionResult Status()
        {         
            return Ok();
        }

        [HttpGet("get-players")]
        public IActionResult GetPlayers(
            [FromServices] SorteioDataContext context)
        {
            var jogadores = context.Players.ToList(); 

            return Ok(jogadores);
        }

        [HttpPost("sort")]
        public IActionResult SorteiaTimes(
             List<Player> players)
        {
            //to-do => montar algoritmo p/ sortear


            return Ok();
        }

        [HttpPost("insert-player")]
        public IActionResult InsertPlayer(
            Player player,
            [FromServices] SorteioDataContext context)
        {
            try
            {
                context.Players.Add(player);
                context.SaveChanges();
                return Created("",player.Id);
            }
            catch (Exception e)
            {
                return Problem(e.InnerException.Message);
            }            
        }

        [HttpDelete("delete-player/{id:int}")]
        public IActionResult DeletePlayer(
            [FromRoute]int id,
            [FromServices] SorteioDataContext context)
        {
            try
            {
                var player = context.Players.FirstOrDefault(x => x.Id == id);

                if (player != null)
                {
                    context.Players.Remove(player);
                    context.SaveChanges();

                    return Ok();
                }
                else
                    return NotFound();
                
            }
            catch (Exception e)
            {
                return Problem(e.InnerException.Message);
            }
        }

        [HttpPut("update-player/{id:int}")]
        public IActionResult UpdatePlayer(
            [FromRoute] int id,
            [FromBody] Player player,
            [FromServices] SorteioDataContext context)
        {
            try
            {
                var model = context.Players.FirstOrDefault(x => x.Id == id);

                if (model != null)
                {
                    model.Name = player.Name;
                    model.Level = player.Level;
                    model.Position = player.Position;

                    context.Players.Update(model);
                    context.SaveChanges();

                    return Ok();
                }
                else
                    return NotFound();

            }
            catch (Exception e)
            {
                return Problem(e.InnerException.Message);
            }
        }


    }
}
