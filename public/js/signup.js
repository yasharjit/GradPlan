const passvaluec = async (
    name,
    email,
    phoneNo,
    university,
    password,
    passwordConfirm
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
            url: "/api/v1/users/signup",
            data: {
                name,
                email,
                phoneNo,
                university,
                password,
                passwordConfirm,
            },
        });
        if (result.data.status === "success") {
            // alert("deal created");
            showAlert("success", "Successfully signed up!");
            window.setTimeout(() => {
                location.assign("/");
            }, 1500);
        }
    } catch (err) {
        // showAlert("error", err.response.data.message);
        console.log(err);
    }
};

document.getElementById("signupForm").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Hello!");
    const form = new FormData();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phoneNo = document.getElementById("phoneNo").value;
    const university = document.getElementById("university").value;
    const password = document.getElementById("password").value;
    const passwordConfirm = document.getElementById("confirmPassword").value;
    // if (document.getElementById("img").files[0]) {
    //     form.append("titleImg", document.getElementById("img").files[0]);
    // }
    passvaluec(name, email, phoneNo, university, password, passwordConfirm);
});
