namespace Sorteio.Models
{
    public class Player
    {
        public int Id { get; set; }
        public string? Name { get; set; }                
        public string? Level { get; set; } //["A", "B", "C"]
        public int? Position { get; set; } // [1 = "Goleiro", 2 = "Zagueiro", 3 = "Meio", 4 = "Atacante"]

    }
}
