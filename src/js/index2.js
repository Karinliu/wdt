    let submitSound = new Audio('../src/assets/submit.wav');
        let searchBtn = document.getElementById("selectFlight");

    searchBtn.addEventListener('submit', searchForm)

    function searchForm(e){

      e.preventDefault();
      submitSound.play();
        setTimeout( function () { 

            searchBtn.submit();
            console.log("BREAAKK")
        }, 1000);
    }  