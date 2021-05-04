const passvaluec = async (data) => {
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
            data,
        });
        if (result.data.status === "success") {
            // alert("deal created");
            showAlert("success", "Deal successfully Created");
            window.setTimeout(() => {
                location.assign("/");
            }, 1500);
        }
    } catch (err) {
        showAlert("error", err.response.data.message);
    }
};

document.getElementById("newProjectForm").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Hello!");
    const form = new FormData();
    form.append("projectName", document.getElementById("projectName").value);
    form.append("description", document.getElementById("description").value);
    form.append("field", document.getElementById("field").value);
    form.append("skillsNeeded", document.getElementById("skillsNeeded").value);
    form.append("experience", document.getElementById("experience").value);
    // if (document.getElementById("img").files[0]) {
    //     form.append("titleImg", document.getElementById("img").files[0]);
    // }
    passvaluec(form);
});
