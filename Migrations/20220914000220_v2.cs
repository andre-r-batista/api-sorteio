using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Sorteio.Migrations
{
    public partial class v2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Level",
                table: "Player",
                type: "VARCHAR(1)",
                maxLength: 1,
                nullable: false,
                oldClrType: typeof(short),
                oldType: "SMALLINT");

            migrationBuilder.AddColumn<string>(
                name: "Position",
                table: "Player",
                type: "VARCHAR(1)",
                maxLength: 1,
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Position",
                table: "Player");

            migrationBuilder.AlterColumn<short>(
                name: "Level",
                table: "Player",
                type: "SMALLINT",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "VARCHAR(1)",
                oldMaxLength: 1);
        }
    }
}
