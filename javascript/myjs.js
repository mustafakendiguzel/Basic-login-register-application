
// Dökümanları çektik.
const button = document.querySelectorAll(".button-click")[0];
const button2 = document.querySelectorAll(".button-click2")[0];
const username = document.querySelectorAll(".mail")[0];
const card = document.querySelectorAll(".card-body")[0]
const password = document.querySelectorAll(".password")[0];
const passwordAgain = document.querySelectorAll(".password-again")[0];
const nicknameList = document.querySelectorAll(".nickname")[0];
const answer = document.querySelectorAll(".your-answer")[0];
let syc = 0;

if (button)
    button.addEventListener("click", clickEvent);
if (button2)
    button2.addEventListener("click", clickEvent2)
// Alertin bir kere gelmesi için sayaç mekanizması ekledim.



// Local stroage'ye ekleme işlemini yaptım.

function clickEvent(butons) {

    let mail = username.value;
    let nickname = nicknameList.value;
    let pass = password.value;
    let passAgain = passwordAgain.value;
    let correctAnswer = answer.value


    if (localStorage.getItem("usernames-password") === null)
        usernames = {};
    else
        usernames = JSON.parse(localStorage.getItem("usernames-password"));

    usernames[nickname] = {
        password: pass,
        pass_agains: passAgain,
        emails: mail,
        correctAnswers: correctAnswer
    }

    if (password.value == passwordAgain.value)
        localStorage.setItem("usernames-password", JSON.stringify(usernames));

    passwordCorrectOrFalse();
    syc += 1;
    // Kaybolması için setTimeout kullandık.
}

function clickEvent2() {
    console.log(LoginSite("miq"));
}

function LoginSite(nickname) {
    var person = {
        ncm:JSON.parse(localStorage.getItem("usernames-password"))[nickname]
    }

}


function newPassword() {

}




// alert mesajı oluşturma işlemi.


function alertMessage(message, typeOfMessage) {
    alert = document.createElement("div");
    alert.className = `alert alert-${typeOfMessage}`;
    alert.role = "alert";
    alert.textContent = `${message}`;
    if (syc === 0) {
        card.appendChild(alert);
    }
}



function passwordShowHide() {
    var x = password;
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}



function passwordCorrectOrFalse() {
    if (password.value == passwordAgain.value) {
        if (syc === 0)
            alertMessage("Başarıyla kaydolundu", "success");
        alert.className = "alert alert-success";
        alert.textContent = "Başarıyla kaydolundu";

    }
    else {
        if (syc === 0)
            alertMessage("Şifreler uyuşmuyor", "danger");
        alert.className = "alert alert-danger"
        alert.textContent = "Şifreler uyuşmuyor!";

    }
}


