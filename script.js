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



//url= "https://api.nasa.gov/planetary/apod?api_key=hkkghHbvnT8Zc9QJAYtX8oSFD72lTC53fUyfMLyS";
  
  let accordionMenu = document.querySelector('.accordionMenu');
  console.log(accordionMenu)
   
  function fetchData(){
     

    fetch("https://api.nasa.gov/planetary/apod?api_key=hkkghHbvnT8Zc9QJAYtX8oSFD72lTC53fUyfMLyS&date=2018-08-05")
     .then(res =>{
       console.log('success', res)
       return res.json();
     })
     
     .then(res =>{
      console.log(res.url)   // link of img
      let img = document.createElement("img");
      img.src = res.url    // link of img
      document.getElementsByClassName("panel")[0].appendChild(img);
      let p = document.createElement("P"); //tetx start here
      p.innerText = res.explanation
      document.getElementsByClassName("panel")[0].appendChild(p);
    })

   // img is in this link
    fetch("https://api.nasa.gov/planetary/apod?api_key=hkkghHbvnT8Zc9QJAYtX8oSFD72lTC53fUyfMLyS&date=2004-06-16")
     .then(res =>{
       console.log('success', res)
       return res.json();
     })
     .then(res =>{
      console.log(res.url)    // link of img
      let img = document.createElement("img");
      img.src = res.url      // link of img
      document.getElementsByClassName("panel")[1].appendChild(img);
      let p = document.createElement("P"); //tetx start here
      p.innerText = res.explanation
      document.getElementsByClassName("panel")[1].appendChild(p);
     

//.catch(err => {
//  console.log("somthing went wrong...,"error);
//});
    
    })
      // img is in this link
     fetch("https://api.nasa.gov/planetary/apod?api_key=hkkghHbvnT8Zc9QJAYtX8oSFD72lTC53fUyfMLyS&date=2002-11-11")
     .then(res =>{
       console.log('success', res)
       return res.json();
     })
     .then(res =>{
      console.log(res.url)   // link of img
      let img = document.createElement("img");
      img.src = res.url    // link of img
      document.getElementsByClassName("panel")[2].appendChild(img);
      let p = document.createElement("P"); //tetx start here
      p.innerText = res.explanation
      document.getElementsByClassName("panel")[2].appendChild(p);
    })

   }

   // img is in this link
   fetch("https://api.nasa.gov/planetary/apod?api_key=hkkghHbvnT8Zc9QJAYtX8oSFD72lTC53fUyfMLyS&date=2005-02-02")
     .then(res =>{
       console.log('success', res)
       return res.json();
     })
     .then(res =>{
      console.log(res.url)   // link of img
      let img = document.createElement("img");
      img.src = res.url   // link of img
      document.getElementsByClassName("panel")[3].appendChild(img);
      let p = document.createElement("P"); //tetx start here
      p.innerText = res.explanation
      document.getElementsByClassName("panel")[3].appendChild(p);

    })
       // img is in this link
      fetch("https://api.nasa.gov/planetary/apod?api_key=hkkghHbvnT8Zc9QJAYtX8oSFD72lTC53fUyfMLyS&date=2018-04-03")
     .then(res =>{
       console.log('success', res)
       return res.json();

     })
     
     .then(res =>{
      console.log(res.url)   // link of img
      let img = document.createElement("img");
      img.src = res.url   // link of img
      document.getElementsByClassName("panel")[4].appendChild(img);
      let p = document.createElement("P"); //tetx start here
      p.innerText = res.explanation
      document.getElementsByClassName("panel")[4].appendChild(p);
    })

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





