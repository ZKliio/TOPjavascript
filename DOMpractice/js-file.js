container = document.querySelector(".container");

// add <p> with red text
const redP = document.createElement("p");
redP.innerText = "Hey I'm red!"
redP.style.cssText = "color: red;"
container.appendChild(redP);

// add h3 with blue text    
const blueHead = document.createElement("h3")
blueHead.textContent = "I'm a blue h3"
blueHead.style.cssText = "color: blue;"
container.appendChild(blueHead);

// a <div> with a black border and pink background color with the following elements inside of it:
//          another <h1> that says “I’m in a div”
//          a <p> that says “ME TOO!”

const blackPink = document.createElement("div")
blackPink.setAttribute("class", "blackPink")
blackPink.style.cssText = "border: 5px solid; border-color: black; background-color: pink"
container.appendChild(blackPink)

const head_BP = document.createElement("h1")
head_BP.textContent = "I'm in a div"
blackPink.appendChild(head_BP);


const p_BP = document.createElement("p")
p_BP.textContent = "ME TOO!"
blackPink.appendChild(p_BP);







