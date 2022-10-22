// These ID was located in the Email.js website 
//templateID = template_a8d4din
// Service ID = service_wmbnom5
// public key (userID) = TIezwWFhXvE463I1o

//-----------------------------------------Moving Background Function --------------------------------------------
const scaleFactor = 1 / 20;

function moveBackground(event){
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
    //console.log(x, y)

    for (let i=0; i < shapes.length; ++i){
        const isOdd = i % 2 === 0;
        const boolInt = isOdd ? -1 : 1;

        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}


// ------------------------------------ Contrast Function -------------------------------------
let contrastToggle = false;

function toggleContrast() {
    contrastToggle = !contrastToggle;

    if(contrastToggle){
        document.body.classList += " dark-theme"
    }else{
        document.body.classList.remove("dark-theme")
    }    
}

// ---------------------------------------Contact Function -------------------------------------
function contact(event){
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visibile"; //the modal class was added to the CSS not html but the "+=" add the new class to the html

    emailjs.sendForm(
        'service_wmbnom5',
        'template_a8d4din',
        event.target,
        'TIezwWFhXvE463I1o'
    ).then(() => {
        // throw new Error("error");  
         loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
    }).catch(() => { //check for any error or if the server dont work
        loading.classList.remove("modal__overlay--visible");
        alert(
            "This email service is temporarily unavailable. Please contact me directly at Bchery@mmentors.org"
            );
    })
}

// ---------------------------------------- MODAL FUNCTION ------------------------------------------------------

let isModalOpen = false; //to toggle it off

function toggleModal(){
    if(isModalOpen){
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    } else {
        isModalOpen = true;
        document.body.classList += " modal--open";
    }
}
