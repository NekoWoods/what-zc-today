//https://www.freecodecamp.org/news/how-to-format-dates-in-javascript/

let date_1 = new Date('09/27/2022 03:30:00'); //start date 09/27/2022 03:30:00 = feng
let date_2 = gmtTime(); //now

//how many 90 minutes there are between now and the start date: days(date_1, date_2)
const days = (date_1, date_2) =>{
    let difference = date_2.getTime() - date_1.getTime();
    let TotalDays = Math.floor(difference / (1000 * 60 * 90)); //89 min = zero 90 min; 91 min = one 90 min
    return TotalDays;
}


//display time, refresh every sec
setInterval(myTimer, 1000);
function myTimer() {
  const d = gmtTime();
  document.getElementById("time").innerHTML = d.toLocaleString();

  let add = (days(date_1, date_2) + 1) * 1000 * 60 * 90; //add 90 min to the start of this session, getting the end of this session
  let diff = date_1.getTime() + add - d.getTime(); //calculate the diff between the end of this session and current time (in ms)
  let min = Math.floor((diff / (1000 * 60))<<0);
  let sec = Math.ceil((diff / 1000) % 60);
  document.getElementById("timeLeft").innerHTML = "> 距离换图还有" + min + "分" + sec.toLocaleString("zh-CN",{minimumIntegerDigits: 2}) + "秒 <";
}

let remainder = days(date_1, date_2)%3;

const img = [];
img[0]='./assets/feng.jpg';
img[1]='./assets/xx.jpg';
img[2]='./assets/huo.jpg';

function calculate(){
    if (remainder == 0){
        document.title="推车什么地图？风图",
        document.getElementById("mainImage").src = img[0]};
    if (remainder == 1){
        document.title="推车什么地图？学校",
        document.getElementById("mainImage").src = img[1]};
    if (remainder == 2){
        document.title="推车什么地图？火图",
        document.getElementById("mainImage").src = img[2]};
}
calculate();
