//https://www.freecodecamp.org/news/how-to-format-dates-in-javascript/

let date_1 = new Date('2026-04-27T15:00:00Z'); //start date UTC+8 2026/04/27 23:00:00 = zd
let date_2 = new Date(); //today

//days between today and the start date: days(date_1, date_2)
const days = (date_1, date_2) =>{
    let difference = (date_2.getTime() + date_2.getTimezoneOffset() * 1000 * 60) - 
                    (date_1.getTime() + date_1.getTimezoneOffset() * 1000 * 60);//convert both dates to UTC in milliseconds and calculate the difference
    let TotalDays = Math.floor(difference / (1000 * 3600 * 24));
    return TotalDays;
}


//display UTC+8 time, refresh every sec
setInterval(myTimer, 1000);
function myTimer() {
  const d = new Date();
  document.getElementById("time").innerHTML = new Date(d.getTime() + d.getTimezoneOffset() * 1000 * 60 + 1000 * 3600 * 8).toLocaleString();
}

let remainder = days(date_1, date_2)%8;

const img = [];
img[3]='./assets/cf.png';
img[4]='./assets/sb.png';
img[1]='./assets/cy.png';
img[0]='./assets/zd.png';
img[2]='./assets/work.png';

function calculate(){
    if (remainder == 1){
        document.getElementById("mainImage").src = img[1],
        document.getElementById("mainImage").alt = "你看到这行字因为图没显示出来 总之今天是草原啦！",
        document.getElementById("zcrotation").innerHTML = "尘封>碎冰>草原>沃刻>尘封>阵地><b>草原</b>>沃刻"};
    if (remainder == 2){
        document.getElementById("mainImage").src = img[2],
        document.getElementById("mainImage").alt = "你看到这行字因为图没显示出来 总之今天是沃刻啦！",
        document.getElementById("zcrotation").innerHTML = "尘封>碎冰>草原>沃刻>尘封>阵地>草原><b>沃刻</b>"};
    if (remainder == 0){
        document.getElementById("mainImage").src = img[0],
        document.getElementById("mainImage").alt = "你看到这行字因为图没显示出来 总之今天是阵地啦！",
        document.getElementById("zcrotation").innerHTML = "尘封>碎冰>草原>沃刻>尘封><b>阵地</b>>草原>沃刻"};        
    if (remainder == 3){
        document.getElementById("mainImage").src = img[3],
        document.getElementById("mainImage").alt = "你看到这行字因为图没显示出来 总之今天是尘封啦！",
        document.getElementById("zcrotation").innerHTML = "<b>尘封</b>>碎冰>草原>沃刻>尘封>阵地>草原>沃刻"};
    if (remainder == 4){
        document.getElementById("mainImage").src = img[4],
        document.getElementById("mainImage").alt = "你看到这行字因为图没显示出来 总之今天是碎冰啦！",
        document.getElementById("zcrotation").innerHTML = "尘封><b>碎冰</b>>草原>沃刻>尘封>阵地>草原>沃刻"};
    if (remainder == 5){
        document.getElementById("mainImage").src = img[1],
        document.getElementById("mainImage").alt = "你看到这行字因为图没显示出来 总之今天是草原啦！",
        document.getElementById("zcrotation").innerHTML = "尘封>碎冰><b>草原</b>>沃刻>尘封>阵地>草原>沃刻"};
    if (remainder == 6){
        document.getElementById("mainImage").src = img[2],
        document.getElementById("mainImage").alt = "你看到这行字因为图没显示出来 总之今天是沃刻啦！",
        document.getElementById("zcrotation").innerHTML = "尘封>碎冰>草原><b>沃刻</b>>尘封>阵地>草原>沃刻"};
     if (remainder == 7){
        document.getElementById("mainImage").src = img[3],
        document.getElementById("mainImage").alt = "你看到这行字因为图没显示出来 总之今天是尘封啦！",
        document.getElementById("zcrotation").innerHTML = "尘封>碎冰>草原>沃刻><b>尘封</b>>阵地>草原>沃刻"};
}
calculate();
