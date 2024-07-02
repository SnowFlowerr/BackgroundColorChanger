function changeColor(){
    let color=colorPicker()
    document.body.style.backgroundColor=color;
    document.getElementById('color').innerText=color
}
function colorPicker(){
    let list='0123456789abcdef';
    let color="#";
    for(let i=0;i<6;i++){
        color+=list[Math.floor(Math.random()*16)]
    }
    return color;
}