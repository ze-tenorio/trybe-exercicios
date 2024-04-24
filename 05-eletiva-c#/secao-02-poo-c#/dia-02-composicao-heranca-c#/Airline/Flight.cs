namespace Airline;

public class Flight
{
    public string FlightId { get; set; }
    public double Distance;
    public Airplane Airplane { get; set; } = new Airplane("PR-DEF");

    public Flight(string FlightId, double Distance)
    {
        this.FlightId = FlightId;
        this.Distance = Distance;
    }

    public double CalculateCost()
    {
        return Airplane.CalculateCost(Distance);
    }
}