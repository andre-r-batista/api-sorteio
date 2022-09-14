namespace Sorteio.Models
{
    public class Player
    {
        public int Id { get; set; }
        public string? Name { get; set; }                
        public string? Level { get; set; } //["A", "B", "C"]
        public string? Position { get; set; } // ["G", "Z", "M", "A"]

    }
}
