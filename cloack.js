const secondhand=document.querySelector('.second-hand')
const minuteshand=document.querySelector('.minute-hand')
const hourshand = document.querySelector('.hour-hand')
function setDate(){
    const now = new Date()
    const seconds = now.getSeconds()
    const seconddeg = ((seconds/60)*360)+90;
    secondhand.style.transform= `rotate(${seconddeg}deg)`;
    const minutes = now.getMinutes()
    const minetesdeg=((minutes/60)*360)+90;
    minuteshand.style.transform= `rotate(${minetesdeg}deg)`;
    const hours = now.getHours()
    const hoursdeg=((hours/60)*360)+90;
    hourshand.style.transform= `rotate(${hoursdeg}deg)`;

}
setInterval(setDate,1000);