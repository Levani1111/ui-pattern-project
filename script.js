// let panel1 = getElementsByID('#panel1');
// panel1.addEventListener('click', fetchData);
// let panel2 = getElementsByID('#panel2');
// panel2.addEventListener('click', fetchData);
// let panel3 = getElementsByID('click', fetchData);
// panel3.addEventListener('click', fetchData)
// let panel4 = getElementsByID("click", fetchData);
// panel4.addEventListener('click', fetchData)
// let panel5 = getElementsByID("click", fetchData);
// panel5.addEventListener('click', fetchData);



url= "https://api.nasa.gov/planetary/apod?api_key=hkkghHbvnT8Zc9QJAYtX8oSFD72lTC53fUyfMLyS";
   let accordionMenu = document.querySelector('.accordionMenu');
  console.log(accordionMenu)
   
  function fetchData(){
     
    fetch(url)
     .then(res =>{
       console.log('success', res)
       return res.json();
     })
     .then(res =>{
      console.log(res.hdurl)
      let img = document.createElement("img");
      img.src = res.hdurl
      document.getElementsByClassName("panel")[0].appendChild(img);

      
      
      

    })
   }
   document.getElementsByClassName(".accordionMenu").innerHTML =
accordionMenu + " " + accordionMenu;
fetchData()




var acc = document.getElementsByClassName("accordion");
var i;

//this is a loop with onclick function 1
for (let i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");

        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
}
//this is a loop with onclick function 2
for (let i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  }
}