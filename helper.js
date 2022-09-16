function myAlert(){
    //alert("this code is located in a seperate js file.")

    //for loop will run 5 times 
    //for(i =0; i < 3; i++){
    //   //alert will show the counter value 
    //   alert("i=" + i);

    //}
}

function countdownCode(pageElement){
    var countdown = 10;

    pageElement.innerHTML = countdown;
    countdown = countdown -1;

    setTimeout(function(){ 
        pageElement.innerHTML = "Blastoff!";
        countdown = countdown -1;
    }, 9000);
//The countdown has started 
    setTimeout(function(){ 
        pageElement.innerHTML = countdown;
        countdown = countdown -1;
    }, 8000);

    setTimeout(function(){ 
        pageElement.innerHTML = countdown;
        countdown = countdown -1;
    }, 7000);
//The countdown keeps going 
    setTimeout(function(){ 
        pageElement.innerHTML = countdown;
        countdown = countdown -1;
    }, 6000);

    setTimeout(function(){ 
        pageElement.innerHTML = countdown;
        countdown = countdown -1;
    }, 5000);
// The countdown is halfway
    setTimeout(function(){ 
        pageElement.innerHTML = countdown;
        countdown = countdown -1;
    }, 4000);

    setTimeout(function(){ 
        pageElement.innerHTML = countdown;
        countdown = countdown -1;
    }, 3000);
//The countdown has almost finished 
    setTimeout(function(){ 
        pageElement.innerHTML = countdown;
        countdown = countdown -1;
    }, 2000);

    setTimeout(function(){ 
        pageElement.innerHTML = countdown;
        countdown = countdown -1;
    }, 1000);

    setTimeout(function(){ 
        pageElement.innerHTML = countdown;
        countdown = countdown -1;
    }, 0000);

    // The countdown has ended 

}