const passvaluexx = async (name, email, password, passwordConfirm) => {
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
            url: "/api/v1/users/signup",
            data: {
                name,
                email,
                password,
                passwordConfirm,
            },
        });
        if (result.data.status === "success") {
            showAlert("success", "Successfully signed up!");
            window.setTimeout(() => {
                location.assign("http://localhost:8000/");
            }, 1000);
        }
    } catch (err) {
        console.log(err);
    }
};

document.getElementById("signupForm").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Hello!");
    const form = new FormData();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const passwordConfirm = document.getElementById("confirmPassword").value;
    passvaluexx(name, email, password, passwordConfirm);
});
