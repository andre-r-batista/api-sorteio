using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Sorteio.Models;
using Sorteio.Map;
using sorteio.Models;

namespace Sorteio.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
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
             List<Player> players,
             [FromServices] SorteioDataContext context)
        {

            try
            {
                if (players.Count() < 12)
                    return BadRequest("Mínimo de 12 jogadores necessários");

                var blueTeam = new Team();
                var whiteTeam = new Team();
                var greenTeam = new Team();

                players = players.OrderBy(x => x.Position)
                                 .ThenBy(x => x.Level)
                                 .ThenBy(x => Guid.NewGuid()).ToList();

                var currentColor = "blue";

                foreach (var player in players)
                {
                    if (currentColor == "blue")
                    {
                        blueTeam.Players.Add(player);
                        currentColor = "white";
                    }
                    else if (currentColor == "white")
                    {
                        whiteTeam.Players.Add(player);

                        if (players.Count() > 16)
                            currentColor = "green";
                        else
                            currentColor = "blue";
                    }
                    else if (currentColor == "green")
                    {
                        greenTeam.Players.Add(player);
                        currentColor = "blue";
                    }
                }

                var teams = new List<Team>();

                blueTeam.Color = "blue";
                blueTeam.Players
                            .OrderBy(x => x.Position)
                            .ThenBy(x => x.Level).ToList();

                whiteTeam.Color = "white";
                whiteTeam.Players
                            .OrderBy(x => x.Position)
                            .OrderBy(x => x.Level);

                greenTeam.Color = "green";
                greenTeam.Players
                            .OrderBy(x => x.Position)
                            .OrderBy(x => x.Level);

                teams.Add(blueTeam);
                teams.Add(whiteTeam);
                teams.Add(greenTeam);

                return Ok(teams);
            }
            catch (Exception e)
            {
                return Problem(e.InnerException.Message);
            }
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

        [HttpGet("get-player/{id}")]
        public IActionResult GetPlayer(
            [FromRoute] int id,
            [FromServices] SorteioDataContext context)
        {
            try
            {
                var player = context.Players.FirstOrDefault(x => x.Id == id);

                if (player is null)
                    throw new Exception("Jogador não encontrado!");

                return Ok(player);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

    }
}
