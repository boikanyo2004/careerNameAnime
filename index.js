const containerEl=document.querySelector(".container")

const careers=["123456","78901","23456","78912","Admin"]
let careerIndex=0

let characterIndex=0;
updateText();

function updateText(){
    characterIndex++
    containerEl.innerHTML=`<h${characterIndex}>I am a ${careers[careerIndex].slice(0,characterIndex)}</h${characterIndex}>`
    // characterIndex++
    if(characterIndex===careers[careerIndex].length){
        careerIndex++
        characterIndex=0

    }
    if(careerIndex===careers.length){
        careerIndex=0;
    }
    setTimeout(updateText,400)

}