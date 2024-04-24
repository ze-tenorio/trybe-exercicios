namespace Airline;

public class Airplane
{
    public string Prefix { get; set; }

    public Airplane(string Prefix)
    {
        this.Prefix = Prefix;
    }

    public double CalculateCost(double distance)
    {
        return distance * 42;
    }
}