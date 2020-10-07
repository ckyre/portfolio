var projects = document.getElementsByClassName("project");
var links = document.getElementsByClassName("nav-link");

// On click link event
Array.prototype.forEach.call(links, function(link) {
    link.addEventListener("click", function(e)
    {
        if(!e.target.classList.contains("active")) 
        {
            // Set links and projects to non active
            ClearActive();
            // Set current link to active
            e.target.classList.add("active");
        }
    }, false);
});

// On click project event
Array.prototype.forEach.call(projects, function(project) {
    project.addEventListener("click", function(e)
    {
        if(!e.target.classList.contains("active")) 
        {
            // Set links and projects to non active
            ClearActive();
            // Set current project to active
            e.target.classList.add("active");
            // Show project content to left panel
            ShowContent(GetProjectId(e.target));
        }
    }, false);
});


// Update left panel texts
var converter = new showdown.Converter();
var content = document.getElementById("content");

const aboutHtml = "<h1>A propos</h1> \n <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra purus tellus, sed dapibus turpis vulputate quis. Etiam scelerisque ultrices neque, at facilisis augue semper non. Vestibulum viverra aliquam felis non luctus. Phasellus varius laoreet neque ac laoreet. In ut elit vel tellus vehicula ornare in non est. Aenean rhoncus vel odio eu sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus. In vitae turpis at dolor bibendum faucibus in nec lorem. Praesent eu sagittis lacus. Vivamus eget velit sit amet dui bibendum efficitur. Aenean sed venenatis est, non fermentum lectus. Curabitur pretium elit nunc, id dapibus risus ultrices id. Nunc ut tortor mollis, interdum tellus non, vulputate enim. Nunc vulputate mauris nec nunc rutrum, quis pellentesque metus viverra. Proin ac tellus elit. Aenean volutpat egestas purus, vel mattis dui eleifend non.</p>";
const contactHtml = "<h1>Contact</h1> \n <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra purus tellus, sed dapibus turpis vulputate quis. Etiam scelerisque ultrices neque, at facilisis augue semper non. Vestibulum viverra aliquam felis non luctus. Phasellus varius laoreet neque ac laoreet. In ut elit vel tellus vehicula ornare in non est. Aenean rhoncus vel odio eu sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus. In vitae turpis at dolor bibendum faucibus in nec lorem. Praesent eu sagittis lacus. Vivamus eget velit sit amet dui bibendum efficitur. Aenean sed venenatis est, non fermentum lectus. Curabitur pretium elit nunc, id dapibus risus ultrices id. Nunc ut tortor mollis, interdum tellus non, vulputate enim. Nunc vulputate mauris nec nunc rutrum, quis pellentesque metus viverra. Proin ac tellus elit. Aenean volutpat egestas purus, vel mattis dui eleifend non.</p>";

// Show project description by id
// ids -1 and -2 are reserved for about and contact description
function ShowContent (id) 
{
    if(id >= 0)
    {
        content.innerHTML = converter.makeHtml(db[id][3]);
    }else 
    {
        if(id == -1)
        {
            content.innerHTML = aboutHtml;
        }else if (id == -2) 
        {
            content.innerHTML = contactHtml;
        }
    }
}

function GetProjectId(element)
{
    var i = 0;
    while(element.classList[i] == "project" || element.classList[i] == "unselectable" || element.classList[i] == "active") 
    {
        i++;
    }
    return parseInt(element.classList[i]);
}

function ClearActive () 
{
    Array.prototype.forEach.call(projects, function(project) {
        project.classList.remove("active");
    });

    Array.prototype.forEach.call(links, function(link) {
        link.classList.remove("active");
    });
}

// Show about page
ShowContent(-1);