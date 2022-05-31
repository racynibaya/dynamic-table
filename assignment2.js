const createTable = function () {
  const table = document.getElementById('table');
  let row = document.getElementById('row').value;
  let column = document.getElementById('column').value;

  if (typeof Number(row) === 'number' && typeof Number(column) === 'number') {
    for (let i = 0; i < row; i++) {
      const tr = document.createElement('tr');

      for (let j = 0; j < column; j++) {
        const td = document.createElement('td');
        const text = document.createTextNode(``);

        td.appendChild(text);
        tr.appendChild(td);
      }

      table.appendChild(tr);
    }

    document.getElementById('row').value = '';
    document.getElementById('column').value = '';
    document.getElementById('column').blur();
  }
};

createTable();

const button = document.querySelector('button');
const body = document.querySelector('body');

button.addEventListener('click', createTable);
body.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    createTable();
  }
});
