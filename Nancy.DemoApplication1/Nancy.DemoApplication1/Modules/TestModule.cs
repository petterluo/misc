namespace Nancy.DemoApplication1.Modules
{
    using Nancy;

    public class TestModule : NancyModule
    {
        public TestModule()
        {
            //Get["/product"] = _ => View["product"];

            Get["/test"] = _ =>
            {
                dynamic viewBag = new DynamicDictionary();
                viewBag.WelcomeMessage = "Nancy project - test page";
                return View["testPage", viewBag];
            };
        }
    }
}