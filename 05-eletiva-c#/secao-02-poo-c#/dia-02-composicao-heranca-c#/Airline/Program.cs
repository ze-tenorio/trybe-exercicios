// See https://aka.ms/new-console-template for more information
namespace Airline;

public class MainClass
{
    public static void Main(string[] args)
    {
        Flight flight = new Flight("AF1234", 1000);
        Airplane airplane = new Airplane("PR-FLA");

        flight.Airplane = airplane;

        Console.WriteLine($"Flight {flight.FlightId} has a distance of {flight.Distance} km and is operated by airplane {flight.Airplane.Prefix}");
        Console.WriteLine($"The cost of the flight is {flight.CalculateCost()}");
    }
}
