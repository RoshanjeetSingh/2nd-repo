const  todolist = [
    {
    name: 'roshanjeet',
    date: '12-3-2020'
},{
    name: 'abhishek',
    date: '13-3-2019'
    }
];
rendertodo();

function rendertodo(){
    let todocontent = '';
    todolist.forEach((todoobject,index ) =>{
        const {name,date} = todoobject;
        const content = `
        <div class="adding-todos-css">${name}</div>
        <div class="adding-todos-css">${date}</div>
        <button class="delete-elem delete-elem-css">delete</button>
        `;
        todocontent += content;
    });
    document.querySelector('.adding-todos').innerHTML = todocontent;

    let dt =document.querySelectorAll('.delete-elem');
    dt.forEach((dltbtn,index)=>{
        dltbtn.addEventListener('click',() => {
            todolist.splice(index,1);
            rendertodo();
        });

    });
}


function addtodo(){
   const inputname = document.querySelector('.i-name');
   const name = inputname.value;
    const inputdate = document.querySelector('.due-date');
    const date = inputdate.value;

    todolist.push({
        name:name,
        date:date
    });
     inputname.value = '';
     inputdate.value = '';
     rendertodo();
}