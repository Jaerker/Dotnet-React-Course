using Microsoft.AspNetCore.Mvc;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistance;

namespace API.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class BaseApiController : ControllerBase
    {
        private IMediator _mediator;

        protected IMediator Mediator => _mediator ??= HttpContext.RequestServices
        .GetService<IMediator>();



    }
}