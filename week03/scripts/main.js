
const input  = document.querySelector("#favchap");
const button = document.querySelector("button");
const list   = document.querySelector("#list");

button.addEventListener('click',function(){
    if (input.value != ""){

        const listOfChapters             = document.createElement('li');
              listOfChapters.textContent = input.value;

        const delBtn             = document.createElement("button");
              delBtn.textContent = 'X';

        listOfChapters.appendChild(delBtn);
        list.appendChild(listOfChapters);

        delBtn.addEventListener('click', function() {
            list.removeChild(listOfChapters);
        })
        input.value='';
        focus(input);
    
    }
})

