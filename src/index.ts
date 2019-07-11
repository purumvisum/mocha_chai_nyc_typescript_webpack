import { sum } from 'code/sum'

var sumResult = sum(1,2)
var div = document.createElement("div");
div.style.cssText = 'font-size: 60px;' +
    ' position: absolute;\n' +
    '    top: 50%;\n' +
    '    left: 50%;\n' +
    '    margin-right: -50%;\n' +
    '    transform: translate(-50%, -50%);\n'
div.innerHTML = `1 + 2 = ${sumResult}`;

document.body.appendChild(div)
