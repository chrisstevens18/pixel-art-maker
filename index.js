// function backg () {
//     let bk = document.createElement('div')
//     bk.style.backgroundColor = 'black'
//     bk.style.paddingBottom = '100%'
//     bk.style.width = '100%'
//     return bk;
// }
//<div class='palet'style="background-color: gray; padding-bottom: 20%; position: fixed; width: 70%; left: 200px; top: 100px;"></div>
// function palet () {
// let palet = document.createElement('div')
// palet.className = "palet"
// palet.style.backgroundColor = "gray"
// palet.style.zIndex = '1';
// palet.style.position = 'absolute'
// palet.style.paddingBottom = "50%"
// palet.style.width = "70%"
// palet.style.left = '260px'
// palet.style.top = '200px'
// palet.style.borderRadius = '5%'
// palet.style.zIndex = '2'
// return palet;
// }
//let palet = document.querySelector('.palet')
// function genDiv () {
//     let div = document.createElement('div');
//     div.className = "grid"
//     div.style.width = ''
//     div.style.float = 'left'
//     div.style.paddingBottom = '2'
//     div.style
//     div.style.backgroundColor = randomColor();
//     return div;
// }
let parentDiv = document.getElementById('parent')
let pixels = document.getElementsByClassName('pixel')
let brushColor1 = document.getElementsByClassName ('brushColor')
let colorRed = document.getElementById('colorRed')
let colorBlue = document.getElementById('colorBlue')
function pixel () {
    let pixel = document.createElement('div')
    pixel.className = "pixel"
    pixel.style.border = '.5px solid black'
    pixel.style.float = "left"
    pixel.style.backgroundColor = "white"
    pixel.style.paddingBottom = ".5%"
    pixel.style.width = ".5%"
    //pixel.style.top = "30px"
    //pixel.style.left = "30px"
    return pixel;
    
    
}
function backG (e) { 
    let pixel = e.target

    console.log(pixel.style.backgroundColor)
    if (pixel.style.backgroundColor !== 'red') {
        pixel.style.backgroundColor = 'red'
    }else pixel.style.backgroundColor = 'white'
}

function brushColor (e) {
    let color = e.target.style.backgroundColor
    console.log(color)

}



// console.log(pixels.className)
//pixels.addEventListener('click', backG)



//pixel loop
for (var i = 0; i < 6475; i++) {
    parentDiv.appendChild(pixel());
}
//backG();
// for (var i = 0 ; i < pixels.length; i++) {
//     pixels[i].addEventListener('click' , backG) ; 
//  }

 for (var j = 0; j < brushColor1.length; j++){
 brushColor1[j].addEventListener('click' , brushColor) ; 
 }
 let body = document.body
 colorRed.addEventListener('click', (e) => {
    let body = document.body
    body.className = 'colorRed'
 })
 colorBlue.addEventListener('click', (e) => {
    let body = document.body
    body.className = 'colorBlue'
 })
 parentDiv.addEventListener('click', (e) => {
    console.log(parentDiv.className===colorBlue)
    if (parentDiv.className==='colorBlue') {
        console.log(e.target)
        e.target.style.backgroundColor = 'blue';
    }
 })