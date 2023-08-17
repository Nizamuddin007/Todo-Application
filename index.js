var todoArray = [];

function saveTodo(){

    var data = document.getElementById("data").value;
    if(data == ""){
        alert("Please enter data.");
        return;
    }

    todoArray.push(data);
    document.getElementById("data").value="";
    localStorage.setItem(1,todoArray.toString());
    display();
}

function display(){


    var str = localStorage.getItem(1);

     if(todoArray.length != 0){   
     todoArray = str.split(",");
     }   
    var htmlString = `
        <tr>
            <th> Sr.No. </th>
            <th> Title </th>
            <th> Action </th>
        </tr>
    `

    var counter=0;

   todoArray.forEach((ele)=>{
        counter++;

         htmlString += `
        <tr>
            <td> ${counter} </td>
            <td> ${ele} </td>
            <td> 
            <button class="btn btn-warning" onclick="editTodo(${counter-1})"> Edit </button>
            <button class="btn btn-danger" onclick="deleteTodo(${counter-1})"> Delete   </button>
            
            </td>
        </tr>
    `


   })

    document.getElementById("todo-table").innerHTML= htmlString;
}

function editTodo(index){

    var newValue = prompt("Do you want to change?", todoArray[index]);

    if(newValue !="" && newValue != null){
        todoArray[index]= newValue;
        localStorage.setItem(1,todoArray.toString());
        display();


    }

}


function deleteTodo(index){
    if(confirm("Are you sure you want to delete?")){
        todoArray.splice(index,1);
        localStorage.setItem(1,todoArray.toString());
        if(todoArray.length == 0){
            localStorage.removeItem(1);
            document.getElementById("todo-table").innerHTML="";
            todoArray = [];
        }

        display();


    }

}

function removeData(){
    localStorage.removeItem(1);
    document.getElementById("todo-table").innerHTML="";
    todoArray = [];

}