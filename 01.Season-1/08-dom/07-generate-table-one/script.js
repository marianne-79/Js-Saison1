// 08-dom/07-generate-table-one/script.js - 8.7: creating a table (1)


(() => {

    // your code here

    CreateTable("mytable", "target", ["1 column"]);
TableAdd("mytable", ["row 1"]);
TableAdd("mytable", ["row 2"]);
TableAdd("mytable", ["row 3"]);
TableAdd("mytable", ["row 4"]);
TableAdd("mytable", ["row 5"]);
TableAdd("mytable", ["row 6"]);
TableAdd("mytable", ["row 7"]);
TableAdd("mytable", ["row 8"]);
TableAdd("mytable", ["row 9"]);
TableAdd("mytable", ["row 10"]);

function CreateTable(id, where, data) {
    var table = "<table id='" + id + "'><thead><tr>";
    for (var i = 0; i < data.length; i++) {
      table = table + "<th>" + data[i] + "</th>";
    }
    table = table + "</tr></thead><tbody></tbody></table>";
    document.getElementById(where).innerHTML += table;
  }
  
  function TableAdd(table, data) {
    var row = "<tr>";
    for (var i = 0; i < data.length; i++) {
      row = row + "<td>" + data[i] + "</td>";
    }
    row = row + "</tr>";
    document.getElementById(table).getElementsByTagName("tbody")[0].innerHTML += row;
    
  }

})();
