using Sorteio.Models;

namespace sorteio.Models
{
    public class Team
    {
        public Team()
        {
            Players = new List<Player>();
            Id = Guid.NewGuid();
        }

        public Guid Id { get; set; }
        public string Color { get; set; }        
        public List<Player> Players { get; set; }
    }
}
