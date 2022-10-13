function gmtTime(){
  let date = new Date();//local dates
  let offset = date.getTimezoneOffset();
  date.setMinutes(date.getMinutes()+offset);//adjust date to GMT+0 getTimezoneOffset
  date.setHours(date.getHours()+8);//adjust to GMT+8, time of Beijing
  return date;
}
