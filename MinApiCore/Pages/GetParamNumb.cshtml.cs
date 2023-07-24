using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace MinApiCore.Pages
{
    public class GetParamNumbModel : PageModel
    {

        [BindProperty]
        public string Phone { get; set; } = "none";
        public string Request { get; set; } = "https://localhost:7225/ParamPhoneNumb";
        public async Task OnGetAsync()
        {
            //HttpClient client = new HttpClient();

            //string message = await client.GetStringAsync(Request);

            //if (message != null)
            //{
            //    Phone = message;
            //}
        }
    }
}
