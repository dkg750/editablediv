console.log("this is an example of Editable Div");
//let container=document.getElementById("container")
//Creating a div Element
let divElem=document.createElement("div");

//Give element id,style and class
    divElem.setAttribute('id','elem');
    divElem.setAttribute('class','elem');
    divElem.setAttribute('style','border:2px solid black; width:154px; height:34px; padding:23px');

    //Add text to the created element
    let val=localStorage.getItem('text');
    let text;
    if(val==null)
    {
    text=document.createTextNode('This is a editable div ');
    }
    else{
        text=document.createTextNode(val);
    }
    divElem.appendChild(text);
    let first=document.getElementById("item-1");

    //Insert the element before element with id first
    container.insertBefore(divElem,first);
    console.log(divElem);

    //add event listener to the divElem
    divElem.addEventListener('click',function(){
        let noTextAreas=document.getElementsByClassName("textarea").length;
        if(noTextAreas==0)
        {
        let html=elem.innerHTML;
        divElem.innerHTML=`<textarea class="textarea" id="textarea" rows="3">${html}</textarea>`;
        }  
        //listen for the blur event on textarea
        let textarea=document.getElementById('textarea');
        textarea.addEventListener('blur',function(){
            elem.innerHTML=textarea.value;
            localStorage.setItem('text',textarea.value);
        });
    });

    