
function none() {
    if (document.getElementById('sidemenu').style.display == 'block') {
        myFunction(document.getElementsByClassName('hidemenu')[0]);
    }
}
function myFunction(x) {

    x.classList.toggle("change");

    if (document.getElementById('sidemenu').style.display == 'block') {
        document.getElementById('sidemenu').style.display = 'none';
    }
    else {
        document.getElementById('sidemenu').style.display = 'block';
    }
}
