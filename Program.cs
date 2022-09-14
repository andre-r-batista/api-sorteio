using Sorteio.Map;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddDbContext<SorteioDataContext>();

var app = builder.Build();

app.MapControllers();

app.Run();