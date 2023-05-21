import {addEventListenerList,canvases,PlayMultiPlayer,Restart} from './Modules/module1.js'

addEventListenerList(canvases,'click',function(){PlayMultiPlayer(this)})

let bodyscreen = document.querySelector('body')

document.addEventListener('DOMContentLoaded', function() {
    Restart()   // Your code here
  });
  












