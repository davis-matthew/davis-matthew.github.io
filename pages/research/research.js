//Project:
//  Title
//  Image Path
//  Date Range
//  Advisor
//  Collaborators/Coworkers
//  Description
const projects = [
    [
        "Verified LLM-Based Code Translation",
        "../../resources/resilientai_pipeline-1.png width:75%;height:50%",
        "2024 - Present",
        "<a href=\"https://vganesh1.github.io/\">Dr. Vijay Ganesh</a>",
        "",
        "We leverage verifier feedback to fine-tune large language models and can train embeddings to match semantically equivalent forms, then during inference we have a translation loop with validators providing feedback to guide repair \
        <br><br>Tasks include: \
        <ul> \
            <li>Translating legacy & non-portable HPC code to modern languages and programming models</li> \
            <li>Translating Online Encyclopedia of Integer Sequences (OEIS) entries to Lean and C/C++</li> \
            <li>Translating loops to loop-invariant annotated loops for program verification</li> \
        </ul>"
    ],
    [
        "REGENT - Configuration Generation for NN Verification",
        "../../resources/linearizenn-cactus-vbs.png width:75%;height:75%",
        "2024 - Present",
        "<a href=\"https://vganesh1.github.io/\">Dr. Vijay Ganesh</a>",
        "Salil Kamath",
        "NN Verification tools such as <a href=\"https://github.com/Verified-Intelligence/alpha-beta-CROWN\">AlphaBetaCrown</a> prove that a model's output specifications cannot be violated by a valid input. \
        We create a reinforcement learning model trained using fuzzed NN instances which given an instance, generates a optimized configuration of per-instance solver hyperparameters for the fastest solve time"
    ],
    [
        "Arbalest Instrumentation Reduction (AIR) - Hybrid OpenMP Data Mapping Violation Detection & Repair",
        "",
        "2024 - Present",
        "<a href=\"https://vsarkar.cc.gatech.edu/\">Dr. Vivek Sarkar</a>",
        "<a href=\"http://lechenyu.io/\">Lechen Yu</a>",
        "Arbalest is a dynamic analysis tool that detects OpenMP Data Mapping Violations. \
        It instruments every single memory access on the host and kernel, but this is unnecessary. \
        Static analysis can greatly reduce the amount of instrumented analysis calls through exploitation of the OpenMP specification and data mapping problem structure. \
        Next, we can further optimize using the filter provided by static analysis tool OMPSanitizer to select specific target regions to instrument. \
        We can then repair the data mapping using Arbalest results. \
        Last, we can optimize the data movement by using OMPMemOpt to find extraneous data"
    ],
    [
        "HPCTest - Automatically Detecting Heterogeneous Bugs in High-Performance Computing Scientific Software",
        "../../resources/hpctest.png width:50%;height:65%",
        "2022 - 2024",
        "<a href=\"https://vsarkar.cc.gatech.edu/\">Dr. Vivek Sarkar</a>",
        "<a href=\"https://mmotwani.com/\">Manish Motwani</a>, Aakash Kulkarni, Ziyan Chen, Yunhan Qiao, Christopher Terrazas",
        "High-performance computing applications that simulate real-world phenomena can have divergent behavior bugs occur when managing data movement across different platforms, such as CPUs and GPUs. \
        We design an end-to-end detection technique using LLM generation, fuzzing, and differential testing to detect new bugs in HPC software. This work is pending review for publication."
    ],
    [
        "Extending OpenRace for GPU Race Detection",
        "",
        "2020 - 2021",
        "<a href=\"https://engineering.tamu.edu/cse/profiles/huang-jeff.html\">Dr. Jeff Huang</a>",
        "<a href=\"https://www.linkedin.com/in/the-brad-swain\">Brad Swain</a>",
        "The formerly open-source OpenRace static analysis tool is great at finding race conditions in programs using OpenMP constructs, std::thread, & pthreads. \
        However, not much had been done to account for races in OpenMP GPU Device constructs (target) or CUDA kernels. This project aimed to extend the OpenRace tool to be able to handle races within the offloaded kernels. \
        The OpenRace tool was not geared towards accurate modeling of the GPU's many layers of structure (kernel calls, warps, threads, cooperative groups). \
        Only a very basic but accurate starting model was implemented (CUDA 8 and before) which caught just a few constructed \"obvious\" races. \
        This work was merged into the OpenRace tool prior to the tool becoming private."
    ],
    [
        "Dynamatic",
        "../../resources/dynamatic_flowchart.png\" width:75%;height:75%",
        "2019-2020",
        "<a href=\"https://engineering.tamu.edu/cse/profiles/huang-jeff.html\">Dr. Jeff Huang</a>",
        "<a href=\"https://dylantheriot.com/#/\">Dylan Theriot</a>, Fatma Elsheimy",
        "Dynamatic is a hybrid program analysis tool. \
        This tool combined the analysis of Google's ThreadSanitizer and the HPCRace static analysis tool to find races in programs using OpenMP constructs. \
        By leveraging overhead-reducing guided analysis from HPCRace, and Thread Sanitizer's extremely low false positive rate, we improved the performance on popular benchmark DataRaceBench, keeping all of the true positives, but changing all of the false positives of base OpenRace into true negatives without too much extra computation overhead. \
        This work is published as an undergraduate thesis here: <a href = \"https://hdl.handle.net/1969.1/194411\">LINK</a>"
    ],
    [
        "NEO-UFO",
        "",
        "2019 - 2019",
        "<a href=\"https://engineering.tamu.edu/cse/profiles/huang-jeff.html\">Dr. Jeff Huang</a>",
        "<a href=\"https://www.linkedin.com/in/yahui-sun\">Yahui Sun</a>, Matthew Chen, Andrew Chin, Andreas Tsouloupas",
        "<a href=\"https://dl.acm.org/doi/10.1145/3180155.3180225\">UFO</a> is a dynamic program analysis tool. \
        This tool finds Use-After-Free (UAF) bugs while chromium is running through the use of trace analysis with Google ThreadSanitizer. \
        The goal is to have this tool run in the background and create a crash log/report to send the engineers whenever a user would encounter one of these bugs. \
        We extended UFO to perform predictive analysis using the <a href=\"http://umathur3.web.engr.illinois.edu/papers/wcp-pldi2017.pdf\">WCP algorithm</a>. \
        I wrote a <a href = \"https://github.com/davis-matthew/NEO-SVF\">Static Analysis pass</a> to read through the LLVM IR of chromium and identify regions which were unlikely to have a UAF. \
        This information was then turned into a Thread Sanitizer blacklist file to toggle on/off expensive analysis, reducing the overhead on profiling tests from ~11x average to ~6-7x."
    ]
]

document.addEventListener("DOMContentLoaded", function(event){
    projects.forEach(createHTMLContent);
});
  


function createHTMLContent(research){
    content = ""
    content += 
    "<div class = \"Project\">\
        <p class = \"Project-Title\">"+research[0]+"</p>\
        <div style=\"display:flex\">"
    if(research[1] != ""){ 
        const [imgPath, imgStyle] = research[1].split(' ', 2)
        content += "\
            <img class = \"Project-Image\" style=\"flex:1;"+imgStyle+"\" src=\""+imgPath+"\" alt=\""+research[0]+" Logo\"></img>"
    }
    content+="\
            <div style=\"flex:4\">\
                <p class = \"Project-Date\">"+research[2]+"</p>\
                <div style=\"display:flex\">\
                    <p class = \"Project-Advisor\">Advisor: "+research[3]+"</p>"
    if(research[4] != ""){
        content+= "\
                    <p class = \"Project-Coworkers\">Collaborators: "+research[4]+"</p>"
    }
    content+= "\
                </div>\
                <p class = \"Project-Description\">"+research[5]+"</p>\
            </div>\
        </div>\
    </div>\
    <hr>\
    "
    document.body.innerHTML += content
}