function myFunction(){
    let pass = document.getElementById("input");
    let img1 = document.getElementById("hide1");
    let img2 = document.getElementById("hide2");

    if (pass.type === 'password') {
        pass.type = "text";
        img1.style.display = "none";
        img2.style.display = "block";
    } 
    else {
        pass.type = "password";
        img1.style.display = "block";
        img2.style.display = "none";
    }
}