
function myFunction(x) {
    
    x.classList.toggle("change");

    if (document.getElementById('sidemenu').style.display == 'block') {
        document.getElementById('sidemenu').style.display = 'none';
    }
    else {
        document.getElementById('sidemenu').style.display = 'block';
    }
}
