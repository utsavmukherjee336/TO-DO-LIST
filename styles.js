// alert('Linked');

// Creating The 'X' close Symbol in each of the LI Tags 

var myNodeItem =
 document.getElementsByTagName('li');

var i;

for(i = 0; i<myNodeItem.length; i++)
{
    var span = document.createElement('SPAN');
    var txt = document.createTextNode('\u00D7');

    span.className = 'close';
    span.appendChild(txt);

    myNodeItem[i].appendChild(span);
}

//Making the close button to function..
var close = document.getElementsByClassName('close');

var i;
for(i = 0; i< close.length; i++)
{
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = 'none';

    }
}

//Adding Check Mark
var list = document.querySelector('ul');

list.addEventListener('click',

    function(e)
    {
        if(e.target.tagName == 'LI'){
            e.target.classList.toggle('checked');
        }
    },

false)

// getting the input tag to display a message if we type a blank message

function newElement(){
    var li = document.createElement('li');

    var inputValue = document.getElementById('myinput').value;

    var t =  document.createTextNode(inputValue);

    li.appendChild(t);
    if(inputValue === '')
    {
        alert("Please Write Something..")
    }
    else
    {
        document.getElementById('muUL').appendChild(li);
    }
    document.getElementById('myinput').value=' ';

    var span = document.createElement('SPAN');
    var txt = document.createTextNode('\u00D7');

    span.className = 'close';
    span.appendChild(txt);

    li.appendChild(span);

    for(i = 0; i< close.length; i++)
    {
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = 'none';

    }
}


}
