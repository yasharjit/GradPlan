const Roadmap = [
    {
        skill: "frontend",
        lvl: "beginner",
        path: "hello1",
    },
    {
        skill: "frontend",
        lvl: "intermediate",
        path: "hello2",
    },
    {
        skill: "frontend",
        lvl: "advanced",
        path: "hello3",
    },
    {
        skill: "backend",
        lvl: "beginner",
        path: "hello4",
    },
    {
        skill: "backend",
        lvl: "intermediate",
        path: "hello5",
    },
    {
        skill: "backend",
        lvl: "advanced",
        path: "hello6",
    },
];

document
    .getElementById("newRoadmapForm")
    .addEventListener("submit", assignVariables);

function assignVariables(e) {
    e.preventDefault();
    var select1 = document.getElementById("presentSkillLevel");
    var skillLevel = select1.options[select1.selectedIndex].value;
    var select2 = document.getElementById("skillName");
    var skillName = select2.options[select2.selectedIndex].value;

    var finalPath;

    for (var i = 0; i < Roadmap.length; i++) {
        if (Roadmap[i].skill == skillName && Roadmap[i].lvl == skillLevel) {
            console.log("found");
            finalPath = Roadmap[i].path;
            console.log(finalPath);
            return;
        }
    }
}
