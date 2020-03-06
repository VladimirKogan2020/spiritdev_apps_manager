using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace AppsRestApi.Migrations
{
    public partial class ProjectStartStopSalesAmount : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "ProjectEnd",
                table: "App",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "ProjectStart",
                table: "App",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<int>(
                name: "SalesAmount",
                table: "App",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ProjectEnd",
                table: "App");

            migrationBuilder.DropColumn(
                name: "ProjectStart",
                table: "App");

            migrationBuilder.DropColumn(
                name: "SalesAmount",
                table: "App");
        }
    }
}
