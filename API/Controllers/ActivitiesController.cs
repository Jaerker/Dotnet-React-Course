using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistance;

namespace API.Controllers;

public class ActivitiesController : BaseApiController
{

    [HttpGet]
    public async Task<ActionResult<List<Activity>>> GetActivities(){

        return await context.Activities.ToListAsync();
        
    }

    [HttpGet("{id}")] // activities/id
    public async Task<ActionResult<Activity>> GetActivity(Guid id){
        return await context.Activities.FindAsync(id);
    }
}