 const inptext= document.getElementById("inp");
 const btn = document.getElementById("big-container"); 

 function apply(data)
 {

 document.getElementById("temp").innerHTML=`${Math.round(data.main.temp)}&deg;C`;
 document.getElementById("city").innerHTML=`${data.name}, ${data.sys.country}`;
  document.getElementById("minmax").innerHTML=`${data.main.temp_min}&deg;C (min) / ${data.main.temp_max}&deg;C (max)`;
  document.getElementById("weather").innerHTML=`${data.weather[0].main}`;   
  document.getElementById("div2").style.display="block"; 
  if(data.weather[0].main=="Clear")
  {
    document.body.style.backgroundImage= "url('https://images.unsplash.com/photo-1616249807402-9dae436108cf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xlYXIlMjB3ZWF0aGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
  }
  if(data.weather[0].main=="Clouds")
  {
    document.body.style.backgroundImage= "url('https://images.unsplash.com/photo-1488034976201-ffbaa99cbf5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHJhaW4lMjBjaXR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')";
  }
  if(data.weather[0].main=="Rain")
  {
    document.body.style.backgroundImage= "url('https://images.unsplash.com/photo-1569684533256-5ccb7e30377f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cmFpbiUyMGNpdHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
  } 
  if(data.weather[0].main=="Thunderstorm")
  {
    document.body.style.backgroundImage= "url('https://images.unsplash.com/photo-1597739239353-50270a473397?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbiUyMGNpdHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
  }
   if(data.weather[0].main=="Snow")
  {
    document.body.style.backgroundImage= "url('https://images.unsplash.com/photo-1522885147691-06d859633fb8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c25vdyUyMGNpdHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
  }
  let tododate= new Date();
  datemanage(tododate);
 } 
 function datemanage(tododate)
 {
    var month =["Janurary", "Feburary", "March", "April", "May","June","July" ,"August","September","October","November","December"];
    document.getElementById('dat').innerHTML=tododate.getDate();
     document.getElementById('time').innerHTML=tododate.getFullYear();
      document.getElementById('mon').innerHTML=month[tododate.getMonth()];
 } 
 btn.addEventListener('keypress',(e)=>
 {
   if(e.which==13)
   {
   const textv= inptext.value; 
   console.log(textv);
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${textv}&appid=e01029fa08c3cbaec5357306f8731c19&units=metric`)
   .then((res)=>{
    return  res.json();

   }) 
   .then((data)=>{
    console.log(data);
     apply(data);

   }) 
   .catch((err)=>
   {
    console.log(err.message);
   }) 
   inptext.value="";
}
 });
 


































  //   const req = new XMLHttpRequest();
  //   req.onload= function (){
  //     const fetchrequest=  this.responseText;
  //     const datas= JSON.parse(fetchrequest);
  //     console.log(datas.ticker.price);
  //   } 
  //   req.error= function () {
  // console.log(this);

  //   } 
  //   req.open('GET','https://api.cryptonator.com/api/ticker/btc-usd');
  //   req.send();
//   fetch(' https://api.tvmaze.com/search/shows?q=friends')
//   .then((re)=>
//   {
//     return re.json();
//   })
//   .then((data)=>{
//   console.log(data);

//   })
//   .catch((err)=>{

// console.log(err.message);

//   });