function highlight(table) {
 const rows = table.querySelectorAll('tbody tr'); 
  Array.from(rows).forEach(row => {
  const dataAvailable = row.querySelector('td[data-available]');
  const genderTr = row.querySelector('td:nth-child(3)');
  const year = row.querySelector('td:nth-child(2)');
  
  if(dataAvailable){
row.classList.add(dataAvailable.dataset.available === 'true' ? 'available' : 'unavailable');
     } else {
row.setAttribute('hidden', '');
     }
  
  if(genderTr){
    const gender = genderTr.innerHTML;
    if(gender === 'm'){
    row.classList.add('male');
      } else{
    row.classList.add('female');
      }
    }
  
  if(year){
    const age = parseInt(year.innerHTML, 10);
    if(age < 18)
     {
      row.style.textDecoration = 'line-through';
     }
  }
  
  })
  

}
