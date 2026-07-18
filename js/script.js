const words = [

"Robotics",
"STEM Education",
"Innovation Labs",
"Coding Programs",
"Artificial Intelligence",
"Competition Training",
"IoT Solutions",




];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const text = document.getElementById("typewriter-text");

function typeEffect(){

    const current = words[wordIndex];

    if(!deleting){

        text.textContent = current.substring(0,charIndex);

        charIndex++;

        if(charIndex > current.length){

            deleting = true;

            setTimeout(typeEffect,1500);

            return;

        }

    }

    else{

        text.textContent = current.substring(0,charIndex);

        charIndex--;

        if(charIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect,deleting?60:100);

}

typeEffect();