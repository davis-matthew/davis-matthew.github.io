//Project:
//  Title
//  Image Path
//  Date Range
//  Advisor
//  Collaborators/Coworkers
//  Description
const projects = [
    [
        "Hybrid OpenMP Data Mapping Violation Detection & Repair (Working Title: OMPCompound)",
        "../../resources/OMPCompound.png\" width = 200px, height = 300px",
        "2022 - Present",
        "Dr. Vivek Sarkar, Georgia Institute of Technology",
        "",
        "Existing tools OMPSanitizer (static), OmpMemOpt (static) & Arbalest (dynamic) perform analysis on OpenMP Data Mapping Violations. This project aims to combine the tools utilizing the best qualities of both tools and automatically repair the detected bugs."
    ],
    [
        "Extending OpenRace for GPU Race Detection",
        "",
        "2020 - 2021",
        "Dr. Jeff Huang, Texas A&M University",
        "Brad Swain, Coderrect Inc.",
        "The formerly open-source OpenRace static analysis tool is great at finding race conditions in programs using OpenMP constructs, std::thread, & pthreads. However, not much had been done to account for races in OpenMP GPU Device constructs (target) or CUDA kernels. This project aimed to extend the OpenRace tool to be able to handle races within the offloaded kernels. The OpenRace tool was not geared towards accurate modeling of the GPU's many layers of structure (kernel calls, warps, threads, cooperative groups). Only a very basic but accurate starting model was implemented (CUDA 8 and before) which caught just a few constructed \"obvious\" races. This work was merged into the OpenRace tool prior to the tool becoming private."
    ],
    [
        "Dynamatic",
        "",
        "2019-2020",
        "Dr. Jeff Huang, Texas A&M University",
        "Dylan Theriot, Fatma Elsheimy",
        "Dynamatic is a hybrid program analysis tool. This tool combined the analysis of Google's ThreadSanitizer and the HPCRace static analysis tool to find races in programs using OpenMP constructs. By leveraging overhead-reducing guided analysis from HPCRace, and Thread Sanitizer's extremely low false positive rate, we improved the performance on popular benchmark DataRaceBench, keeping all of the true positives, but changing all of the false positives of base OpenRace into true negatives without too much extra computation overhead. This work is published here: <a href = \"https://hdl.handle.net/1969.1/194411\">LINK</a>"
    ],
    [
        "NEO-UFO",
        "",
        "2019 - 2019",
        "Dr. Jeff Huang, Texas A&M University",
        "Yahui Sun, Matthew Chen, Andrew Chin, Andreas Tsouloupas",
        "<a href=\"https://dl.acm.org/doi/10.1145/3180155.3180225\">UFO</a> is a dynamic program analysis tool. This tool finds Use-After-Free (UAF) bugs while chromium is running through the use of trace analysis with Google ThreadSanitizer. The goal is to have this tool run in the background and create a crash log/report to send the engineers whenever a user would encounter one of these bugs. We extended UFO to perform predictive analysis using the <a href=\"http://umathur3.web.engr.illinois.edu/papers/wcp-pldi2017.pdf\">WCP algorithm</a>. I wrote a <a href = \"https://github.com/davis-matthew/NEO-SVF\">Static Analysis pass</a> to read through the LLVM IR of chromium and identify regions which were unlikely to have a UAF. This information was then turned into a Thread Sanitizer blacklist file to toggle on/off expensive analysis, reducing the overhead on profiling tests from ~11x average to ~6-7x."
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
                <p class = \"Project-Date\">"+project[2]+"</p>\
                <div style=\"display:flex\">\
                    <p class = \"Project-Advisor\">Advisor: "+project[3]+"</p>"
    if(project[4] != ""){
        content+= "\
                    <p class = \"Project-Coworkers\">Collaborators: "+project[4]+"</p>"
    }
    content+= "\
                </div>\
                <p class = \"Project-Description\">"+project[5]+"</p>\
            </div>\
        </div>\
    </div>\
    <hr>\
    "
    document.body.innerHTML += content
}