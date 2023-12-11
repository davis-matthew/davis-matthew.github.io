//Project:
//  Title
//  Image Path
//  URL
//  Collaborators/Coworkers
//  Description
const projects = [
    [
        "THE-Spellchecker",
        "../../resources/THE-Icon.png\" width = 150px height = 150px",
        "https://danielwilliams.tech/spellchecker",
        "Daniel Williams",
        "Disappointed by the naïvety of existing spellcheckers for code, Daniel and I have set out on creating a tool which is better geared towards real-world code. We aim for convenient high precision spelling and grammatical fixes as well as other analyses ran on comments and strings within the code."
    ]
]

document.addEventListener("DOMContentLoaded", function(event){
    projects.forEach(createHTMLContent);
});
  


function createHTMLContent(project){
    content = ""
    content += 
    "<div class = \"Project\">\
        <p class = \"Project-Title\">"+project[0]+"</p>\
        <div style=\"display:flex\">"
    if(project[1] != ""){ 
        content += "\
            <img class = \"Project-Image\" style=\"flex:1\" src=\""+project[1]+"\" alt=\""+project[0]+" Logo\"></img>"
    }
    content+="\
            <div style=\"flex:4\">\
                <p class = \"Project-URL\">\
                    <a href=\""+project[2]+"\">Website</a>\
                </p>\
                <div style=\"display:flex\">"
    if(project[3] != ""){
        content+= "\
                    <p class = \"Project-Coworkers\">Collaborators: "+project[3]+"</p>"
    }
    content+= "\
                </div>\
                <p class = \"Project-Description\">"+project[4]+"</p>\
            </div>\
        </div>\
    </div>\
    <hr>\
    "
    document.body.innerHTML += content
}