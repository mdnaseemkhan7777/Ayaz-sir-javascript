      
let arr = [];

let entry = document.getElementById("entry");
entry.addEventListener("click", displayDetails);



function displayDetails(){
    let names = document.getElementById("name").value;
    let user = document.getElementById("user").value;
    let des = document.getElementById("des").value;
    let type = document.getElementById("type").value;

    // if(!names || !user || !des || !type){
    //     alert("please fill the form");
    //     return;
    // }

    let obj = {
      name : names,
      user : user,
      des : des ,
      type : type
    }
    arr.push(obj);
    let list = '';
    for(var i =0; i < arr.length; i++){
      let html = '<div class="card mb-3 col-md-4" style="max-width: 540px;">';
      html += '<div class="row g-0">';
      html += '<div class="col-md-4">';
      html += '<img src="https://images.adsttc.com/media/images/5e74/f376/b357/6549/2a00/055c/large_jpg/Ben_Hosking.jpg?1584722798" width="250px" height="300px"';
      html += 'class="img-fluid rounded-start imgg" alt="...">';
      html += '</div>';
      html += '<div class="col-md-8">';
      html += '<div class="card-body">';
      html += '<h5 class="card-title tit" >'+arr[i].name+'</h5>';
      html += '<ul class="list-group list-group-flush" >';
      html += '<li class="list-group-item">'+arr[i].user+'</li>';
      html += '<li class="list-group-item">'+arr[i].des+'</li>';
      html += '<li class="list-group-item">'+arr[i].type+'</li>';
      html += '</ul>';
      html += ' </div>';
      html += '</div>';
      html += '</div>';
      html += '</div>';
      list += html;
    }
    


        
    document.getElementById("list").innerHTML= list;
  }