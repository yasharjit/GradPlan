const passvalue = async (email, password) => {
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
            url: "/api/v1/users/login",
            data: {
                email,
                password,
            },
        });
        if (result.data.status === "success") {
            showAlert("success", "Successfully logged in!");
            window.setTimeout(() => {
                location.assign("/");
            }, 1500);
        }
    } catch (err) {
        console.log(err);
    }
};

document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Hello!");
    const form = new FormData();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    passvalue(email, password);
});
