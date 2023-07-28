var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

List<string> starts = new List<string>() { 

    "050",
    "055",
    "070",
    "077",
};
Random random = new Random();

app.UseCors(builder =>
{
    builder.AllowAnyOrigin()
           .AllowAnyMethod();
});

app.MapGet("/RandPhoneNumb", () =>
{
    return $"{starts[random.Next(3)]} {random.Next(100,999)} {random.Next(100, 999)}";
});

app.MapPost("/ParamPhoneNumb", async (string start) =>
{
    return $"{start} {random.Next(100, 999)} {random.Next(100, 999)}";
});



// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}



app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
