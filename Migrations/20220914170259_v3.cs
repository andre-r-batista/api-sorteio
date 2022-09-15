using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Sorteio.Migrations
{
    public partial class v3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<short>(
                name: "Position",
                table: "Player",
                type: "SMALLINT",
                maxLength: 1,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "VARCHAR(1)",
                oldMaxLength: 1);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Position",
                table: "Player",
                type: "VARCHAR(1)",
                maxLength: 1,
                nullable: false,
                oldClrType: typeof(short),
                oldType: "SMALLINT",
                oldMaxLength: 1);
        }
    }
}
