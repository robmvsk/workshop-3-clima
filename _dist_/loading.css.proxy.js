// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "\n.lds-hourglass {\n    display: inline-block;\n    position: relative;\n    width: 320;\n    height: 100;\n  }\n  .lds-hourglass:after {\n    content: \" \";\n    display: block;\n    border-radius: 50%;\n    Width: 0;\n    Height: 0;\n    margin: 8px;\n    box-sizing: border-box;\n    border: 32px solid #fff;\n    border-color: rgb(174, 231, 193) transparent #fff transparent;\n    animation: lds-hourglass 1.2s infinite;\n  }\n  @keyframes lds-hourglass {\n    0% {\n      transform: rotate(0);\n      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    }\n    50% {\n      transform: rotate(900deg);\n      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    }\n    100% {\n      transform: rotate(1800deg);\n    }\n  }\n \n  .ajustar-margen {\n    display: inline-block;\n    position: relative;\n    width: 320;\n    height: 100;\n  }";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}