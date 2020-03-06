using Microsoft.EntityFrameworkCore.Migrations;

namespace AppsRestApi.Migrations
{
    public partial class CategoryPlattform : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Category",
                table: "App",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Plattform",
                table: "App",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Category",
                table: "App");

            migrationBuilder.DropColumn(
                name: "Plattform",
                table: "App");
        }
    }
}
