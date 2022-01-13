let data = [];



function insert(){
    let namesInput = document.getElementById("name");
    let userInput = document.getElementById("user");
    let desInput = document.getElementById("des");
    let typeInput = document.getElementById("type");
   
    data.push({name: namesInput, user: userInput, des: desInput, type: typeInput  })

}

function delet(){
     namesInput.value = "";
     userInput.value = "";
     desInput.value = "";
     typeInput.value = "";

}


  

ul = document.createElement('ul');

document.getElementById('myItemList').appendChild(ul);

data.forEach(function (item) {
let li = document.createElement('li');
ul.appendChild(li);

li.innerHTML += item;
});



  










































//  let a = document.getElementById("display").innerHTML= names + user + des + type;

// function clearAndShow() {
    
//     namesInput.value = "";
//     userInput.value = "";
//     desInput.value = "";
//     typeInput.value = "";
    
    
//     messageBox.innerHTML = "";
    
//     messageBox.innerHTML += "names: " + names.join(", ") + "<br/>";
//     messageBox.innerHTML += "user: " + user.join(", ") + "<br/>";
//     messageBox.innerHTML += "des: " + des.join(", ");
//     messageBox.innerHTML += "type: " + type.join(", ");
//   }

 