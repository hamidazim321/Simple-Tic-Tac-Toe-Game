let canvases = document.querySelectorAll('canvas');
function addEventListenerList(list, event, fn) {
    for (var i = 0, len = list.length; i < len; i++) {
        list[i].addEventListener(event, fn);
        list[i].setAttribute('id',i+1)
    }
}









let Xstatus = false;
function MakeXO(box){    
    const CanvasHeight = box.height;
    const CanvasWidth = box.width;
    const ctx = box.getContext('2d');
    ctx.font = '40vw Arial';
    if(!Xstatus){
        ctx.fillText('X',(CanvasWidth/2)-60,(CanvasHeight/2)+60);
        Xstatus = true;
    }
    else{
        ctx.fillText('O',(CanvasWidth/2)-60,(CanvasHeight/2)+60);
        Xstatus = false;

    }
    console.log(box.id)
    
}

export {MakeXO,addEventListenerList,canvases}
