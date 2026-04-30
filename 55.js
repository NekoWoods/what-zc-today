//https://www.freecodecamp.org/news/how-to-format-dates-in-javascript/

let date_1 = new Date('2026-04-30T2:00:00Z'); //start date UTC+8 30 April 2026 10:00:00 = hai an
let date_2 = new Date(); //now

//how many 60 minutes there are between now and the start date: days(date_1, date_2)
const days = (date_1, date_2) =>{
    let difference = (date_2.getTime() + date_2.getTimezoneOffset() * 1000 * 60 ) - 
                    (date_1.getTime() + date_1.getTimezoneOffset() * 1000 * 60 );
    let TotalDays = Math.floor(difference / (1000 * 60 * 60)); //59 min = zero 60 min; 61 min = one 60 min
    return TotalDays;
}


//display UTC+8 time, refresh every sec
setInterval(myTimer, 1000);
function myTimer() {
  const d = new Date();
    document.getElementById("time").innerHTML = new Date(d.getTime() + d.getTimezoneOffset() * 1000 * 60 + 1000 * 3600 * 8).toLocaleString();
    
  // let add = (days(date_1, date_2) + 1) * 1000 * 60 * 60; //add 60 min to the start of this session, getting the end of this session
  // let diff = date_1.getTime() + add - d.getTime(); //calculate the diff between the end of this session and current time (in ms)
  // let min = Math.floor((diff / (1000 * 60))<<0);
  // let sec = Math.ceil((diff / 1000) % 60);
  // document.getElementById("timeLeft").innerHTML = "—— 距离换图还有" + min + "分" + sec.toLocaleString("zh-CN",{minimumIntegerDigits: 2}) + "秒 ——";
}

let remainder = days(date_1, date_2)%7;

const img = [];
img[0]='./assets/feng.jpg';
img[1]='./assets/xx.jpg';
img[2]='./assets/huo.jpg';
img[3]='./assets/new.jpg';
img[4]='./assets/tu.jpg';
img[5]='./assets/shui.jpg';
img[6]='./assets/shuku.png';

function calculate(){
    if (remainder == 5){
        document.getElementById("mainImage").src = img[1],
        document.getElementById("mainImage").alt = "学校",
        document.getElementById("rotation").innerHTML = "<b>学校</b>>火山>海岸>风图>机关>书库>红沙"};
    if (remainder == 6){
        document.getElementById("mainImage").src = img[2],
        document.getElementById("mainImage").alt = "火山",
        document.getElementById("rotation").innerHTML = "学校><b>火山</b>>海岸>风图>机关>书库>红沙"};

    if (remainder == 0){
        document.getElementById("mainImage").src = img[5],
        document.getElementById("mainImage").alt = "水图",
        document.getElementById("rotation").innerHTML = "学校>火山><b>海岸</b>>风图>机关>书库>红沙"};
    if (remainder == 1){
        document.getElementById("mainImage").src = img[0],
        document.getElementById("mainImage").alt = "风图",
        document.getElementById("rotation").innerHTML = "学校>火山>海岸><b>风图</b>>机关>书库>红沙"};
    if (remainder == 2){
        document.getElementById("mainImage").src = img[3],
        document.getElementById("mainImage").alt = "机关",
        document.getElementById("rotation").innerHTML = "学校>火山>海岸>风图><b>机关</b>>书库>红沙"};
     if (remainder == 3){
        document.getElementById("mainImage").src = img[6],
        document.getElementById("mainImage").alt = "书库",
        document.getElementById("rotation").innerHTML = "学校>火山>海岸>风图>机关><b>书库</b>>红沙"};
    if (remainder == 4){
        document.getElementById("mainImage").src = img[4],
        document.getElementById("mainImage").alt = "沙图",
        document.getElementById("rotation").innerHTML = "学校>火山>海岸>风图>机关>书库><b>红沙</b>"};
}
calculate();


