// Funcion que detecta si el comando ingresado existe para ejecutarlo
function processCommand(command) {
  if (command === "clear") {
    return "clear"
  } else if (command === "date") {
    return new Date().toLocaleDateString();
  } else if (command === "hello") {
    return "Bienvenido, en que puedo ayudarte";
  } else if (command === "help") {
    return "Comandos disponibles: date, hello, clear";
  } else if (command === "slay") {
    let multi = `
<div class='ascii'><pre>
dddddddddddddddddddddddxddddoddlc:ldxxddddddddddddddddddddddddd
ddddddddddddddddddddddo:,'.. ..   ..';coddddddddddddddddddddddd
dddddddddddddddddddd:........,     .....':odddddddddddddddddddd
dodddddddddddddddd:.     ...;c'.     ......'cdddddddddddddddodd
oodddddddoodddddo'     .;ldkOOkkd:'.  .... ..'cdddddddooooooodd
ddddddddddoddddo.   .cxOOO00KKK000Oo,  ..    ..;oddddddoooooddo
ddddddddddddddo.   .okO00000KKK0000Ox,        ...oooooooooooooo
dddddddddddddd.   .lxkOO000KKKKKK00Oko'.       ...ooooooooooooo
dddxxdxxxdxxx:.   cxkOOO000KKK0000OOOkl.        ...odoooooooooo
xxxxxxxxxxxxd.   .xkkkxxxxkkOOkxxdddxkxl.        . .dddddddoooo
xxxxxxxxxxxxc    loc;'..'',lkko;'....',,.        .  :ddddddddoo
xxxxxxxxxxxx.   ...'coo:...l00x;..':lo:..            lddddddddd
xxxxxxxxxxxd     ....   ,:ox0Oxdoc:.   .             .ddddddddd
xxxxxxxxxxxl    .:;...,cxkxk0kxxkkdc;.....            cxxxxxxdd
xxxxxxxxxxx;    'xkxddkOkxk00kddxkOOkxdool.           .dxxxxxdd
xxxxxxxxxxx,    ;xOOOOOOkoxOOxdxdkO0000Okd.            :xxxxxxd
xxxxxxxxxxx'    .cdkkkOOx'.',...;k000OOkxl.            .dddxdxx
xxxxxxxxxxx.     'cdxkkOkc;,.,:coO00Okkxo;.             :dxdddd
xxxxxxxxxxx.     .;lxkkkkxdxdxxkOOOOkkxo:'.             .dddddd
ddddddddddd.     .,:oxxc'.......,:lxkxdc,'..             lxxdxd
ddddooooooo.     .;;lxd,.,;;,,;,'.'oxdoc;,'.             .xxxxx
ooooooooooo.      ',:dxd:;loddoc;cdkxoc;,,'.              cdddd
ooooodddddd.      ..,ldxd:,'..',cxxxdc,''..               .dddd
oododddddoo.        .;dkOOOOOOOOOOkdc,....                 :ddd
ooooooooooo.         .,oxkOOOOOkkxl;...                    .odd
ooooooooooo.         ...,;:cccc:;'...                       ;oo
ooooodooddd.         ..............   .....                  co
ooooooooooo.         .,.........  .....'''..                 .o
ooooooooooo.         'l;''..........';;:::;.                  '
ooooooooooo.         'oc;,''.....',;:cclllc,.                  
</pre>
    `;
    // multi = multi.replace(/\n/g, '<br>').replace(/ /g, '&nbsp;');

    return multi

  } else {
    return "Comando no reconocido";
  }
}
export default processCommand

