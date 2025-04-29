function sendMail(){
    const parms = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        phone: document.querySelector("#subject").value,
        message: document.querySelector("#message").value,
    };

    emailjs
        .send('service_gyuwhda', 'template_upy29dc', parms)
        .then(()=>{
            alert("Email has been sent!!");
    })
        .catch((err)=>{
            console.log(err);
            alert(err);
        })
}