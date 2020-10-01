function $getValue(id){
    return document.getElementById(id).value;
}


function $setValue(id, value){
    document.getElementById(id).value = value;
}

function $delText(id){
    document.getElementById(id).innerText = "";
}

function $setText(id, content){
    document.getElementById(id).innerText = content;
}

function $setHtmlText(id, content){
    document.getElementById(id).innerHTML = content;
}

function $appendHtmlText(id, content){
    document.getElementById(id).innerHTML += content;
}
function $click(id, func){
    //document.getElementById(id).onclick = func; 
    document.getElementById(id).addEventListener('click', func);
}
function getStringDate(date){
    const yr = date.getFullYear();
    const mon = date.getMonth() + 1;
    const dt = date.getDate();
    return dt + "/" + mon + "/" + yr; 
}



