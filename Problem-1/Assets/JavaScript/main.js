/*------------------------------------- 
    Name: Ryan McGrane
    Student number: C16419862
    Rich Web Tech Lab 3 problem-1

*/
////////////////////////////////////////////// Beginning of the RxJS code /////////////////////////////////////////////////////

//Creates a close button and appends it to each list item
var myNodeList = document.getElementsByTagName("LI");
var i = 0;


// Creating an array from the node List so we can map onto it with .map
newArray = Array.from(myNodeList)
object = newArray.map(index => {

    var span2 = document.createElement("SPAN");
    var txt2 = document.createTextNode("\u00D7");
    span2.className = "close";
    span2.appendChild(txt2);
    myNodeList[i].appendChild(span2);
    i++;
});


// Creating our close element which are represented by an x
var close = document.getElementsByClassName("close");
var i = 0;

newArray1 = Array.from(close)
object1 = newArray1.map(index => {

    const closeSource = Rx.Observable.fromEvent(close[i], 'click');

    closeSource.subscribe(event => {
        
        var div = closeSource.sourceObj.parentElement;
        div.style.display = "none";

    });

    i++;
});


// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');

var source = Rx.Observable.fromEvent(list, 'click');

var subscription = source.subscribe()

list.addEventListener('click', function(ev)
{
    if(ev.target.tagName === 'LI')
    {
        ev.target.classList.toggle('checked');
    }  
}, false);


//Insert button referenced from the HTML
const addButton = document.getElementsByClassName("InsertButton")
const sourceful = Rx.Observable.fromEvent(addButton, 'click');


// Subscribing the observable above to respond to user clicking add button
sourceful.subscribe(event => {
    
    if(document.title !== 'Lab1')
    {
        subscribe.error("Wrong Page");
    }

    console.log("Add button test click For Rx Observables");
    var li = document.createElement("li");

    // Grabbing the users input putting it into a textnode
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);


    // Error checking for white Space
    if (inputValue === '') 
    {
        alert("You must write something!");
    } 
    else 
    {
        document.getElementById("myUL").appendChild(li);
    }

    document.getElementById("myInput").value = "";

    var span2 = document.createElement("SPAN");
    var txt2 = document.createTextNode("\u00D7");
    span2.className = "close";
    span2.appendChild(txt2);
    li.appendChild(span2);

    var x = document.querySelectorAll("li");
    i = 0;

    newArray3 = Array.from(close)
    object3 = newArray3.map(index => {

        const closeSource = Rx.Observable.fromEvent(close[i], 'click');

        closeSource.subscribe(event => {
            
            var div = closeSource.sourceObj.parentElement;
            div.style.display = "none";
    
        });
    
        i++;
    });
    
});

// Creating an observable to manage the clicking event of the clearing of the item from the list
const clearList =  document.getElementById("clear-list");
const clearSource = Rx.Observable.fromEvent(clearList, 'click');

clearSource.subscribe(event => {
    
    var lst = document.getElementsByTagName("ul");
    lst[0].innerHTML= "";

});


const colorCheck =  document.getElementById("color");
const colorSource = Rx.Observable.fromEvent(colorCheck, 'click');

colorSource.subscribe(event => {
   
    var colorValue = document.getElementById('color').value;
    document.getElementById('test').style.background = colorValue;

});





