//https://www.freecodecamp.org/news/how-to-format-dates-in-javascript/

let date_1 = new Date('09/19/2022 23:00:00'); //start date 09/19/2022 23:00:00 = zd
let date_2 = new Date(); //today

//days between today and the start date: days(date_1, date_2)
const days = (date_1, date_2) =>{
    let difference = date_2.getTime() - date_1.getTime();
    let TotalDays = Math.floor(difference / (1000 * 3600 * 24));
    return TotalDays;
}


//display time, refresh every sec
setInterval(myTimer, 1000);
function myTimer() {
  const d = new Date();
  document.getElementById("time").innerHTML = d.toLocaleString();
}

let remainder = days(date_1, date_2)%4;

const img = [];
img[0]='./assets/zd.png';
img[1]='./assets/cf.png';
img[2]='./assets/sb.png';
img[3]='./assets/cy.png';

function calculate(){
    if (remainder == 0){
        //document.getElementById("zc").innerHTML=("zd"), 
        document.getElementById("mainImage").src = img[0]};
    if (remainder == 1){
        //document.getElementById("zc").innerHTML=("cf"), 
        document.getElementById("mainImage").src = img[1]};
    if (remainder == 2){
        //document.getElementById("zc").innerHTML=("sb"), 
        document.getElementById("mainImage").src = img[2]};
    if (remainder == 3){
        //document.getElementById("zc").innerHTML=("cy"), 
        document.getElementById("mainImage").src = img[3]};
}
calculate();

