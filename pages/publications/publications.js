publications = [
    ["Georgia Institute Of Technology (2022 - present)",
        [

        ]
    ],
    ["Texas A&M University (2018 - 2022)",
        [
            "2022 - <b>Davis, Matthew James</b>; Theriot, Dylan (2022). Dynamatic: An OpenMP Race Detection Tool Combining Static and Dynamic Analysis. <a href=\"https://hdl.handle.net/1969.1/194411\">Link</a>"
        ]
    ]
]



document.addEventListener("DOMContentLoaded", function(event){
    publications.forEach(createHTMLContent);
});
  


function createHTMLContent(institute){
    content = ""
    content += "<h3>"+institute[0]+"</h3>"
    for(publication of institute[1]){
        content += "<p class = \"Citation\">"+publication+"</p>"
    }
    content+= "<br><hr>"
    document.body.innerHTML += content
}