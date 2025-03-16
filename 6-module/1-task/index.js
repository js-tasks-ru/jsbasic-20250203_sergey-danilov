/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */


export default class UserTable {
  elem = null;
  rows = [];

  constructor(rows) {
    this.rows = rows || this.rows;
    this.elem = this.#render();
  }

  #template() {
    return `
    <table>
    <thead>
        <tr>
            <th>Имя</th>
            <th>Возраст</th>
            <th>Зарплата</th>
            <th>Город</th>
            <th></th>
        </tr>
    </thead>
         <tbody>
        ${this.rows.map(row => `
          <tr>
            <td>${row.name}</td>
            <td>${row.age}</td>
            <td>${row.salary}</td>
            <td>${row.city}</td>
            <td><button class="remove-btn">X</button></td>
          </tr>
        `).join('')}
    </tbody>
</table>`;
  }

  #render() {
    const temp = document.createElement('div');
    temp.innerHTML = this.#template();
    this.elem = temp.firstElementChild;

    this.elem.addEventListener('click', this.#onMenuClick);

    return this.elem;
  }

  #onMenuClick = (event) => {
    if(!event.target.classList.contains('remove-btn'))
      return;
    
    const row = event.target.closest('tr');
    row.remove();
      
  }
}