const contactForm = document.querySelector(".contact__form"),
  email = document.getElementById("email"),
  subject = document.getElementById("subject"),
  message = document.getElementById("message");

document.getElementById("sendMsg").addEventListener("click", (e) => {
  e.preventDefault();
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "brkatanwar0@gmail.com",
    Password: "gzffeujwbvygblro",
    To: "brkatanwar0@gmail.com",
    From: email.value,
    Subject: subject,
    Body: message.value,
  }).then((message) => alert(message));
});
