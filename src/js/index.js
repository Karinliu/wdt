(function() {

    console.log("log log")

    let errorFile = new Audio('../src/assets/error.wav');
    let succesFile = new Audio('../src/assets/succes.wav');
    let part1 = new Audio('../src/assets/part1.wav');
    let part2 = new Audio('../src/assets/part2.wav');
    let part3 = new Audio('../src/assets/part3.wav');
    let part4 = new Audio('../src/assets/part4.wav');
    let part5 = new Audio('../src/assets/part5.wav');
    let part6 = new Audio('../src/assets/part6.wav');
    let part7 = new Audio('../src/assets/part7.wav');
    let part8 = new Audio('../src/assets/part8.wav');
    let happy = new Audio('../src/assets/happy.wav');
    let sad = new Audio('../src/assets/sad.wav');
    let dog = new Audio('../src/assets/dog.wav');
    let plane = new Audio('../src/assets/airplane.wav');
    let playButton = document.getElementById("playbtn");
    let form = document.getElementById("myForm");
    let forminputs = document.querySelectorAll("input");
    // let name = document.querySelector("#full-name")

    forminputs.forEach(()=> checkEnter)

    function checkEnter(e){
     e = e || event;
     var txtArea = /textarea/i.test((e.target || e.srcElement).tagName);
     return txtArea || (e.keyCode || e.which || e.charCode || 0) !== 13;
    }

    let inputs = document.querySelectorAll('input')

    //setup before functions
    let typingTimer; //timer identifier
    let doneTypingInterval = 1000; //time in ms (5 seconds)
    let firstname = document.querySelector("#full-name");
    let lastname = document.querySelector("#last-name");
    let email = document.querySelector("#email-input");
    let mobile = document.querySelector("#mobile");
    let filledname = document.querySelector("#filledname");
    let filledlastname = document.querySelector("#filledlastname");
    let filledemail = document.querySelector("#filledemail");

    //on keyup, start the countdown
    firstname.addEventListener('input', () => {
        clearTimeout(typingTimer);
        if (firstname.value) {
            typingTimer = setTimeout(doneTypingFirstname, doneTypingInterval);
        }
    });
    //user is "finished typing," do something
    function doneTypingFirstname() {
        if (firstname.value !== "Larissa") {
            errorFile.play();
            console.log("het is fout!")
                // return false
        } else {
            succesFile.play();
            // return true

            filledname.textContent = "Ingevulde naam is " + firstname.value;
            console.log("Is jouw naam:", firstname.value, "?")
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
        if (lastname.value !== "Klaassen") {
            errorFile.play();
            console.log("het is fout!")
                // return false
        } else {
            succesFile.play();
            filledlastname.textContent = "De achternaam is " + lastname.value
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
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
            succesFile.play();
            filledemail.textContent = "Email is " + email.value
            console.log("het is goed!")
            return true
        } else {
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
        if (mobile.value.length <= 2) {
            part1.play();
            console.log("het is goed!")
        } else if (mobile.value.length >= 3 && mobile.value.length <= 4) {
            part2.play();
        } else if (mobile.value.length >= 5 && mobile.value.length <= 6) {
            part3.play();
        } else if (mobile.value.length >= 7 && mobile.value.length <= 8) {
            part4.play();
            // succesFile.play();
        } else if (mobile.value.length === 9) {
            part6.play();
            // succesFile.play();
        } else if (mobile.value.length === 10) {
            succesFile.play();
        } else if (mobile.value.length > 10) {
            errorFile.play();
            console.log("het is fout!")
        }
    }

    let dogrequest = document.querySelector("input[type='checkbox']");
    let dogrequestForm = document.querySelector(".dogrequestForm");

    dogrequest.addEventListener("keydown", inputChecked)

    function inputChecked() {
        if (dogrequest.checked === true) {
            dog.play();
            dogrequestForm.classList.remove("hidden");
            console.log("checked")

        }else if(dogrequest.checked === false){
            // dog.stop();
            dogrequestForm.classList.add("hidden");
        } else {

            console.log("not checked")
        }
    }


    let dogname = document.querySelector("#dog-name");
    let filledName = document.querySelector("#filled-dogname");
    let breed = document.querySelector("#breed-name");
    let filledBreed = document.querySelector("#filled-breed");
    let dogweight = document.querySelector("#dogweight");
    let filleddogweight = document.querySelector("#filleddog-dogweight");


    dogname.addEventListener('input', () => {
        clearTimeout(typingTimer);
        if (dogname.value) {
            typingTimer = setTimeout(doneTypingdogname, doneTypingInterval);
        }
    });

    function doneTypingdogname() {
        if (dogname.value.length === 0) {
            sad.play();
            console.log("het is fout!")
                // return false
        } else {
            happy.play();
            filledName.textContent = "De naam is " + dogname.value
                // return true
            console.log("het is goed")
        }
    }


    breed.addEventListener('input', () => {
        clearTimeout(typingTimer);
        if (breed.value) {
            typingTimer = setTimeout(doneTypingBreed, doneTypingInterval);
        }
    });

    function doneTypingBreed() {
        if (breed.value !== 'Labrador') {
            sad.play();
            console.log("het is fout!")
                // return false
        } else {
            happy.play();
            filledBreed.textContent = dogname.value + " is het ras " + breed.value
                // return true
            console.log("het is goed")
        }
    }


    dogweight.addEventListener('input', () => {
        clearTimeout(typingTimer);
        if (dogname.value) {
            typingTimer = setTimeout(doneTypingdogweight, doneTypingInterval);
        }
    });

    function doneTypingdogweight() {
        if (dogweight.value.length === 0) {
            sad.play();
            console.log("het is fout!")
                // return false
        } else {
            happy.play();
            filleddogweight.textContent = dogname.value + "'s gewicht is " + dogweight.value + " kilo"
                // return true
            console.log("het is goed")
        }
    }


    let submitBtn = document.getElementById("myForm");

    submitBtn.addEventListener('submit', submitForm)

    function submitForm(e){

      e.preventDefault();
      plane.play();
        setTimeout( function () { 

            submitBtn.submit();
            console.log("BREAAKK")
        }, 3000);
    }    

})();