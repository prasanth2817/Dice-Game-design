/*creating and appending the tags with the help of dom*/
function creatediv(tagname, attriname, attrivalue, attriname1, attrivalue1) {
  const div = document.createElement(tagname);
  div.setAttribute(attriname, attrivalue);
  div.setAttribute(attriname1, attrivalue1);
  return div;
}
function createhtag(tagname, content) {
  const htag = document.createElement(tagname);
  htag.innerText = content;
  return htag;
}
function createspantag(tagname, content) {
  const spantag = document.createElement(tagname);
  spantag.innerText = content;
  return spantag;
}
function createbuttontag(tagname, content) {
  const btntag = document.createElement(tagname);
  btntag.innerText = content;
  return btntag;
}
const div = creatediv("div", "class", "div-style", "id", "div-style");
const h3tag = createhtag("h3", "Let's Play Dice");
div.appendChild(h3tag);
document.body.append(div);

const div1 = creatediv("div", "class", "div1-style", "id", "div1-style");
const h1tag1 = createhtag("h1", "Player-1 To Play");
div1.appendChild(h1tag1);
document.body.append(div1);

const div2 = creatediv("div", "class", "div2-style", "id", "div2-style");
const spantag1 = createspantag("span", "Player-1");
const spantag2 = createspantag("span", "0");
spantag2.setAttribute("id", "displaycount1");
const btntag = createbuttontag("button", "Roll Now");
btntag.setAttribute("class", "rollnowbtn");
btntag.setAttribute("id", "rollnowbtn");
btntag.setAttribute("type", "button");
btntag.setAttribute("onclick", "rolldice1()");
div2.appendChild(spantag1);
div2.appendChild(spantag2);
div2.appendChild(btntag);
document.body.append(div2);

const div4 = creatediv("div", "class", "div4-style", "id", "div4-style");
const image = document.createElement("img");
image.setAttribute("id", "diceimage");
image.setAttribute("alt", "diceimg");
image.setAttribute("src", "./dice-images/dice-2.png");
div4.appendChild(image);
document.body.append(div4);

const div3 = creatediv("div", "class", "div3-style", "id", "div3-style");
const spantag3 = createspantag("span", "Player-2");
const spantag4 = createspantag("span", "0");
spantag4.setAttribute("id", "displaycount2");
const btntag1 = createbuttontag("button", "Roll Now");
btntag1.setAttribute("class", "rollnowbtn");
btntag1.setAttribute("id", "rollnowbtn1");
btntag1.setAttribute("type", "button");
btntag1.setAttribute("onclick", "rolldice2()");
div3.appendChild(spantag3);
div3.appendChild(spantag4);
div3.appendChild(btntag1);
document.body.append(div3);

const div6 = creatediv("div", "class", "div6-style", "id", "div6-style");
div6.appendChild(div2);
div6.appendChild(div4);
div6.appendChild(div3);
document.body.append(div6);

const div5 = creatediv("div", "class", "div5-style", "id", "div5-style");
const btntag2 = createbuttontag("button", "Reset");
btntag2.setAttribute("class", "reset");
btntag2.setAttribute("id", "reset");
btntag2.setAttribute("type", "Reset");
btntag2.setAttribute("onclick", "resetgame()");
div5.appendChild(btntag2);
document.body.append(div5);
/*Function part starts*/
let image1 = new Image();
let image2 = new Image();
let image3 = new Image();
let image4 = new Image();
let image5 = new Image();
let image6 = new Image();

image1.src = "./dice-images/dice-1.png";
image2.src = "./dice-images/dice-2.png";
image3.src = "./dice-images/dice-3.png";
image4.src = "./dice-images/dice-4.png";
image5.src = "./dice-images/dice-5.png";
image6.src = "./dice-images/dice-6.png";

const images = [image1, image2, image3, image4, image5, image6];

let count1 = 0;
let count2 = 0;
const arr = ["Player-1 To Play", "Player-2 To Play"];
const winners = [
  "Congratulations😍 Player-1 Won the game🙌",
  "Congratulations😍 Player-2 Won the game🙌",
];

/* Function to pick the players to start the game*/
function startgame() {
  const selectedplayer = document.getElementById("div1-style");
  const pick = Math.floor(Math.random() * 2);
  selectedplayer.innerHTML = `<h1>${arr[pick]}</h1>`;
  if (pick == 0) {
    document.getElementById("rollnowbtn").disabled = false;
    document.getElementById("rollnowbtn1").disabled = true;
  } else {
    document.getElementById("rollnowbtn").disabled = true;
    document.getElementById("rollnowbtn1").disabled = false;
  }
}
startgame();
alert("lets Begin the game");
/*Function for roll now button player1*/ 
function rolldice1() {
    document.getElementById("rollnowbtn").disabled = true
    setTimeout(function(){
  let diceImageElement = document.getElementById("diceimage");
  let diceroll1 = Math.floor(Math.random() * 6);
  let selectedimages = images[diceroll1];
  diceImageElement.src = selectedimages.src;
  count1 += diceroll1 + 1;
  let countedvalue = (document.getElementById("displaycount1").innerHTML =count1);
  if ((document.getElementById("rollnowbtn").disabled = false)) {
    document.getElementById("rollnowbtn").disabled = false;
    document.getElementById("rollnowbtn1").disabled = true;
    const playername = document.getElementById("div1-style");
    playername.innerHTML = `<h1>${arr[0]}</h1>`;
  } else {
    document.getElementById("rollnowbtn").disabled = true;
    document.getElementById("rollnowbtn1").disabled = false;
    const playername = document.getElementById("div1-style");
    playername.innerHTML = `<h1>${arr[1]}</h1>`;
  }
  if (countedvalue >= 30) {
    alert(winners[0]);
    alert("click reset button to restart the game");
    const disablebtn = document.getElementById("rollnowbtn");
    disablebtn.disabled = true;
    const disablebtn1 = document.getElementById("rollnowbtn1");
    disablebtn1.disabled = true;
    const winnername = document.getElementById("div1-style");
    winnername.innerHTML = `<h1>${winners[0]}</h1>`;
  }
  return countedvalue;
},1000)
}
/*function for roll now button player2*/
function rolldice2() {
    document.getElementById("rollnowbtn1").disabled = true
    setTimeout(function(){
  let diceImageElement1 = document.getElementById("diceimage");
  let diceroll2 = Math.floor(Math.random() * 6);
  let selectedimages1 = images[diceroll2];
  diceImageElement1.src = selectedimages1.src;
  count2 += (diceroll2 + 1);
  let countedvalue1 = (document.getElementById("displaycount2").innerHTML =count2);
  if ((document.getElementById("rollnowbtn1").disabled = false)) {
    document.getElementById("rollnowbtn").disabled = true;
    document.getElementById("rollnowbtn1").disabled = false;
    const playername = document.getElementById("div1-style");
    playername.innerHTML = `<h1>${arr[1]}</h1>`;
  } else {
    document.getElementById("rollnowbtn").disabled = false;
    document.getElementById("rollnowbtn1").disabled = true;
    const playername = document.getElementById("div1-style");
    playername.innerHTML = `<h1>${arr[0]}</h1>`;
  }
  if (countedvalue1 >= 30) {
    alert(winners[1]);
    alert("click reset button to restart the game");
    const disablebtn = document.getElementById("rollnowbtn");
    disablebtn.disabled = true;
    const disablebtn1 = document.getElementById("rollnowbtn1");
    disablebtn1.disabled = true;
    const winnername1 = document.getElementById("div1-style");
    winnername1.innerHTML = `<h1>${winners[1]}</h1>`;
  }
  return countedvalue1;
},1000)
}
/*Function for Reset button*/
function resetgame() {
  const selectedplayer1 = document.getElementById("div1-style");
  const pick1 = Math.floor(Math.random() * 2);
  selectedplayer1.innerHTML = `<h1>${arr[pick1]}</h1>`;
  const resetcount = document.getElementById("displaycount1");
  resetcount.innerHTML = 0;
  const resetcount1 = document.getElementById("displaycount2");
  resetcount1.innerHTML = 0;
  const enablebtn = document.getElementById("rollnowbtn");
  enablebtn.disabled = false;
  const enablebtn1 = document.getElementById("rollnowbtn1");
  enablebtn1.disabled = false;
  count1 = 0;
  count2 = 0;
  if (pick1 == 0) {
    document.getElementById("rollnowbtn").disabled = false;
    document.getElementById("rollnowbtn1").disabled = true;
  } else {
    document.getElementById("rollnowbtn").disabled = true;
    document.getElementById("rollnowbtn1").disabled = false;
  }
  return selectedplayer1;
}
/* End of the code*/
