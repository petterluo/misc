namespace Nancy.DemoApplication1.Modules
{
    using Nancy;

    public class FlightModule : NancyModule
    {
        public FlightModule()
        {
            Get["/flight/"] = _ => View["flight"];
        }
    }
}