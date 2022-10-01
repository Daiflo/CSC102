function myAlert(){
    //alert("this code is located in a seperate js file.")

    //for loop will run 5 times 
    //for(i =0; i < 3; i++){
    //   //alert will show the counter value 
    //   alert("i=" + i);

    //}
}
function getuserinput(){
    firstName = prompt("first name");
        //This gives you the first name 
        lastName = prompt("last name");
        //This gives you the last name
        fullname = firstName + " "+ lastName; 
        //This gives you both names combined
        while(fullname.length > 20){
            firstName = prompt("first name");
        lastName = prompt("last name");
        fullname = firstName + " "+ lastName; 
        }

        alert("Your full name is: " + fullname );
        
        badgenumber = 1001;
        while (badgenumber > 1000){
            badgenumber = prompt ("What is your badge number? ");
            //This gives you the badge number 
        }
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
        if(countdown <5){
            pageElement.innerHTML = "Warning Less than 1/2 way to launch time left " + countdown;}
            else{pageElement.innerHTML = countdown;}
        countdown = countdown -1;
    }, 8000);

    setTimeout(function(){ 
        if(countdown <5){
            pageElement.innerHTML = "Warning Less than 1/2 way to launch time left " + countdown;}
            else{pageElement.innerHTML = countdown;}
        countdown = countdown -1;
    }, 7000);
    //The countdown keeps going 
    setTimeout(function(){ 
        if(countdown <5){
            pageElement.innerHTML = "Warning Less than 1/2 way to launch time left " + countdown;}
            else{pageElement.innerHTML = countdown;}
        countdown = countdown -1;
    }, 6000);

    setTimeout(function(){ 
        if(countdown <5){
            pageElement.innerHTML = "Warning Less than 1/2 way to launch time left " + countdown;}
            else{pageElement.innerHTML = countdown;}
        countdown = countdown -1;
    }, 5000);
// The countdown is halfway
    setTimeout(function(){ 
        if(countdown <5){
            pageElement.innerHTML = "Warning Less than 1/2 way to launch time left " + countdown;}
            else{pageElement.innerHTML = countdown;}
        countdown = countdown -1;
    }, 4000);

    setTimeout(function(){ 
        if(countdown <5){
        pageElement.innerHTML = "Warning Less than 1/2 way to launch time left " + countdown;}
        else{pageElement.innerHTML = countdown;}
        countdown = countdown -1;
    }, 3000);
//The countdown has almost finished 
    setTimeout(function(){ 
        if(countdown <5){
            pageElement.innerHTML = "Warning Less than 1/2 way to launch time left " + countdown;}
            else{pageElement.innerHTML = countdown;}
        countdown = countdown -1;
    }, 2000);

    setTimeout(function(){ 
        if(countdown <5){
            pageElement.innerHTML = "Warning Less than 1/2 way to launch time left " + countdown;}
            else{pageElement.innerHTML = countdown;}
        countdown = countdown -1;
    }, 1000);

    setTimeout(function(){ 
        if(countdown <5){
            pageElement.innerHTML = "Warning Less than 1/2 way to launch time left " + countdown;}
            else{pageElement.innerHTML = countdown;}
        countdown = countdown -1;
    }, 0000);

    // The countdown has ended 

}

