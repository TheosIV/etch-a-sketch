//slider, creating and changing grid
let grid = document.getElementById("container");
grid.style.height = "40rem";
grid.style.width = "40rem";
let cells=[]; let rows=[];

const gridsize = document.getElementById('pixelrange');
let pixelnum = -1 * gridsize.value;
changegrid();
gridsize.addEventListener("change", changegrid);

function changegrid(){
    deletegrid();
    pixelnum = -1 * gridsize.value;
    let num = pixelnum;
    let height = 40/num;
    let width = 40/num;

    for(let j=0; j<num; j++){
        let row = document.createElement('div');
        rows.push(row);
        row.setAttribute("class", "row");
        row.style.width = "40em";
        row.style.height = "auto";
        grid.appendChild(row);
    
        for(let i=0; i<num; i++){
            let cell = document.createElement('div');
            cells.push(cell);
            cell.setAttribute("class", "cell");
            cell.style.height = `${height}em`;
            cell.style.width = `${width}em`;
            row.appendChild(cell);
            
        }
        //fill();
        
        
        
        
    }
    
}

function deletegrid(){
    for(let i=0; i<cells.length; i++){
        var c= cells[i];
        c.remove();
    }
    for(let i=0; i<rows.length; i++){
        var c= rows[i];
        c.remove();
    }

}




//tools section except grid
const colorpicker = document.getElementById('favcolor');
const rainbowbtn = document.getElementById('rainbowbtn');
const eraser = document.getElementById('eraser');
const reset = document.getElementById('resetbtn');


colorpicker.addEventListener('change', fill);
function fill(){
    cells.forEach(cell => cell.addEventListener('mouseenter', function(){
        this.style.backgroundColor = colorpicker.value;
        this.style.outline = "none";
    }));
}

rainbowbtn.addEventListener('click', rbow);
function rbow(){
    
    //alert("hii");
    cells.forEach(cell => cell.addEventListener('mouseenter', function(){
        var colors = ["violet", "indigo", "blue", "green", "yellow", "orange", "red"];
        var color = colors[Math.floor(Math.random()*7)];
        this.style.backgroundColor = color;
    }));
    

}

eraser.addEventListener('click', erase);
function erase(){
    cells.forEach(cell => cell.addEventListener('mouseenter', function(){
        this.style.backgroundColor = "transparent";
    }));
}

reset.addEventListener('click', resetarea);
function resetarea(){
    for(let i=0; i<cells.length; i++){
        var c= cells[i];
        c.style.backgroundColor = "transparent";
    }
}










