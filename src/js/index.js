(function() {

    console.log("log log")

    let errorFile = new Audio('../src/assets/error.wav');
    let succesFile = new Audio('../src/assets/succes.wav');
    let playButton = document.getElementById("playbtn");
    let form = document.getElementById("myForm");
    let forminputs = document.querySelectorAll("input");
    // let name = document.querySelector("#full-name")


    //setup before functions
    let typingTimer;                //timer identifier
    let doneTypingInterval = 1000;  //time in ms (5 seconds)
    let firstname = document.querySelector("#full-name");
    let lastname = document.querySelector("#last-name");
    let email = document.querySelector("#email-input");
    let mobile = document.querySelector("#mobile");

    //on keyup, start the countdown
    firstname.addEventListener('input', () => {
        clearTimeout(typingTimer);
        if (firstname.value) {
            typingTimer = setTimeout(doneTypingFirstname, doneTypingInterval);
        }
    });
        //user is "finished typing," do something
    function doneTypingFirstname () {
        if(firstname.value !== "Larissa"){
          errorFile.play();
          console.log("het is fout!")
          // return false
      }else{
        succesFile.play();
        // return true
        console.log("het is goed")
      }
    }

    lastname.addEventListener('input', () => {
        clearTimeout(typingTimer);
        if (lastname.value) {
            typingTimer = setTimeout(doneTypingLastname, doneTypingInterval);
        }
    });

    function doneTypingLastname() {
        if(lastname.value !== "Klaassen"){
          errorFile.play();
          console.log("het is fout!")
          // return false
      }else{
        succesFile.play();
        // return true
        console.log("het is goed")
      }
    }

    email.addEventListener('input', () => {
        clearTimeout(typingTimer);
        if (email.value) {
            typingTimer = setTimeout(doneTypingEmail, doneTypingInterval);
        }
    });

    function doneTypingEmail() {
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)){
          succesFile.play();
          console.log("het is goed!")
          return true
      }else{
        errorFile.play();
        // return true
        console.log("het is fout")
        return false
      }
    }

    mobile.addEventListener('input', () => {
        clearTimeout(typingTimer);
        if (mobile.value) {
            typingTimer = setTimeout(doneTypingMobile, doneTypingInterval);
        }
    });

    function doneTypingMobile() {
        if(mobile.value.length===10){
          succesFile.play();
          console.log("het is goed!")
      }else{
        errorFile.play();
        // return true
        console.log("het is fout")
      }
    }

})();