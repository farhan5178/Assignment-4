function getJob(id){
   const element = document.getElementById(id);
   return Number(element.innerText);
}

function setJob(id, value){
   const element = document.getElementById(id);
   element.innerText = value;
}

// Hide
