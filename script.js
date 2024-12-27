let allowDrop = function (event){
    event.preventDefault();
    console.log("over");
}
let mark = function (event){
    event.target.classList.add('selected');
}
let unmark = function (event){
    event.target.classList.remove('selected');
}
let drag = function (event){
    curCellId = event.target.id;
    console.log("drag");
}
let drop = function (event){
    if (curCellId == event.target.id){
        document.getElementById(curCellId).draggable = false;
        document.getElementById(curCellId).style.margin = "-2px -2px";
        event.target.append(document.getElementById(curCellId));
        if (Array.from(list.childNodes).length == 0){
            alert("you win!");
        }
    }
    else{
        curCellId = "";
    }
    event.target.classList.remove('selected');
    console.log("drop");
}

let body = document.body;
let list = document.querySelector(".list");
let field = document.querySelector(".field");
let curCellId;
let height = 6;
let width = 8;
let cellWidth = 80;
let cellHeight = 60;
let cellList = []; 
for (let i = 0; i < height; i++){
    for (let j = 0; j < width; j++){
        let cell = document.createElement("div");
        cell.classList.add("pic");
        cell.style.backgroundPositionX = j*(-cellWidth)+"px";
        cell.style.backgroundPositionY = i*(-cellHeight)+"px";
        cell.draggable = true;
        cell.addEventListener("dragstart", drag);
        cell.id = j + "X" + i;
        cellList.push(cell);
        let place = document.createElement("div");
        place.classList.add("place");
        place.addEventListener("dragover", allowDrop);
        place.addEventListener("dragenter", mark);
        place.addEventListener("dragleave", unmark);
        place.addEventListener("drop", drop);
        place.id = j + "X" + i;
        field.append(place);
    }
}
for (let i = 0; i < height*width; i++){
    let rand = Math.floor(Math.random()*cellList.length);
    list.append(cellList[rand]);
    cellList.splice(rand,1);
}