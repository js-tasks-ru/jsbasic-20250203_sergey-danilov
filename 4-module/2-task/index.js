function makeDiagonalRed(table){
 for(let td of table.rows){ 
  for(let th of td.cells){
    if(th.outerText[0]==th.outerText[2]){
      th.style.background = 'red';
    };
    
  }
 }
}