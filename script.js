function sendMail(){
    // Gather form values
    const parms = {
        name: document.querySelector("#name").value,
        email:  document.querySelector("#email").value,
        phone:   document.querySelector("#subject").value,
        message:   document.querySelector("#message").value,
    };

    emailjs.send('service_gyuwhda', 'template_upy29dc', parms)
      .then(() => {
        alert("Email has been sent!!");
        window.location.reload();
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to send email: " + err.text);
      });
}