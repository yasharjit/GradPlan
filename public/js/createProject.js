const passvaluec = async (
    projectName,
    description,
    field,
    skillsNeeded,
    experience
) => {
    const hideAlert = () => {
        const el = document.querySelector(".alerts");
        if (el) {
            el.parentElement.removeChild(el);
        }
    };

    const showAlert = (type, msg) => {
        hideAlert();

        const markup = `<div class="alerts alert--${type}">${msg}</div>`;
        document.querySelector("body").insertAdjacentHTML("afterbegin", markup);

        window.setTimeout(hideAlert, 5000);
    };
    try {
        const result = await axios({
            method: "POST",
            url: "/api/v1/projects",
            data: {
                projectName,
                description,
                field,
                skillsNeeded,
                experience,
            },
        });
        if (result.data.status === "success") {
            // alert("deal created");
            showAlert("success", "Deal successfully Created");
            window.setTimeout(() => {
                location.assign("/");
            }, 1500);
        }
    } catch (err) {
        // showAlert("error", err.response.data.message);
        console.log(err);
    }
};

document.getElementById("newProjectForm").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Hello!");
    const form = new FormData();
    const projectName = document.getElementById("projectName").value;
    const description = document.getElementById("description").value;
    const field = document.getElementById("field").value;
    const skillsNeeded = document.getElementById("skillsNeeded").value;
    const experience = document.getElementById("experience").value;
    // if (document.getElementById("img").files[0]) {
    //     form.append("titleImg", document.getElementById("img").files[0]);
    // }
    passvaluec(projectName, description, field, skillsNeeded, experience);
});
