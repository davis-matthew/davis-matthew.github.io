//Project:
//  Title
//  Image Path
//  URL
//  Collaborators/Coworkers
//  Description
const projects = [
    [
        "THE-Software",
        "../../resources/THE-Icon.png\"",
        "https://github.com/davis-matthew/THE-Software",
        "<a href=\"https://danielwilliams.tech/Resume.html\">Daniel Williams</a>",
        "A software initiative designed to establish foundational software which is more capable, faster, and easier to use/extend. Some examples include: \
        <ul>\
            <li> <b>THE-Programming Language:</b> A C-inspired programming language updated with redesigns to address concerns and programmer desires. Prioritizes analysis amenability and overall efficiency</li>\
            <li> <b>THE-Parser:</b> A fused lexer & parser which can handle any recursively enumerable grammar with error recovery and built-in optimization depending on parsing goal</li> \
            <li> <b>THE-Compiler:</b> A front & middle-end for <b>THE-Programming Language</b>. Allows tuning of prioritization between speed, compilation time, memory usage, executable size, & energy usage</li> \
            <li> <b>THE-Spellchecker:</b> A spelling & grammar checker built with code syntax in mind. High precision spelling and grammatical fixes as well as other analyses ran on comments and strings within the code</li> \
        </ul>"
    ],
    [
        "Frobenius",
        "",
        "",
        "",
        "A DSL & accompanying code generation tool that allows mathematicians to write a simple description of a brute-force math search and receive highly optimized code deployable as volunteer computing tasks. \
        <b>Frobenius</b> automatically leverages relevant theorems and proven bounds to cut down the problem search space"
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
        const [imgPath, imgStyle] = project[1].split(' ', 2)
        content += "\
            <img class = \"Project-Image\" style=\"flex:1;"+imgStyle+"\" src=\""+imgPath+"\" alt=\""+project[0]+" Logo\"></img>"
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