const personArray = []; //The array that will keep info
var counter = 0; //Counts number of people added
let check = false;

function addPerson() {
    var randid = Math.round(Math.random() * 1000 + 1000); //Random id
    let numpattern = /^\d+$/; //RegExp for checking numbers
    let result2;
    var name = document.getElementById("name");
    var lastname = document.getElementById("lastname");
    var idno = document.getElementById("idno");
    var tel = document.getElementById("tel");
    //Elements are taken from HTML file

    let result1 = idno.value.match(numpattern);
    result2 = tel.value.match(numpattern);
    //console.log(result2);
    //console.log(tel.value);
    check = false;

    if (result1 === null || (tel.value != "" && result2 === null)) {
        //Checking if id number is only numbers
        alert("Please enter valid values!");
        check = true;
    }
    counter++;

    name != null && lastname != null && idno != null
    //If needed areas are not null and id number is only numbers
    let person = {
        "counter": counter,
        "id": randid,
        "name": name.value,
        "lastname": lastname.value,
        "idno": idno.value,
        "tel": tel.value,
    }; //person object is created

    name.value = "";
    lastname.value = "";
    idno.value = "";
    tel.value = "";
    //Form is cleaned

    write(person);

    var idlabel = document.getElementById("show-id");
    var namelabel = document.getElementById("show-name");
    var lastnamelabel = document.getElementById("show-lastname");
    var idnolabel = document.getElementById("show-idno");
    var tellabel = document.getElementById("show-tel");
    //Areas on top right panel are taken to variables

    idlabel.value = person.id;
    namelabel.value = person.name;
    lastnamelabel.value = person.lastname;
    idnolabel.value = person.idno;
    tellabel.value = person.tel;
    //Values are passed to top right panel's areas

    if (check) {
        var table = document.getElementById("mytable");
        var rowCount = table.rows.length;
        counter--;
    }
}


function write(person) {
    if (check == true) {
        return;
    }

    personArray.push(person)
    //console.log(personArray);

    var table = document.getElementById("mytable");
    table.style.tableLayout = "fixed";
    var row = table.insertRow(-1);

    row.style.textAlign = "center";
    if (personArray.length % 2 == 0) {
        row.style.className = "add-row-1";
        row.style.backgroundColor = "rgb(230, 230, 230)";
    }

    else {
        row.style.className = "add-row-2";
        row.style.backgroundColor = "rgb(190, 190, 190)";
    }

    var delbutton = document.createElement("button");
    delbutton.innerHTML = "<i class='fi fi-br-trash'></i>";
    delbutton.className = "edit-button";
    delbutton.onclick = function () {
        var p = delbutton.parentNode.parentNode;
        p.parentNode.removeChild(p);
        let delNo = p.cells[0].innerText;
        delNo = (parseInt(delNo));
        delNo--;
        delNo = delNo.toString();
        //console.log(delNo);
        //console.log(counter);
        if (delNo > -1) {
            personArray.splice(delNo, 1);
        }
        for (let i = 1; i < personArray.length + 1; i++) {
            if (i % 2 == 1) table.rows[i].style.backgroundColor = "rgb(190, 190, 190)";
            else table.rows[i].style.backgroundColor = "rgb(230, 230, 230)"
            let cells = table.rows[i].cells;
            let noWrite = (i).toString();
            cells[0].innerText = noWrite;
        }
        //console.log(personArray);
    }

    var editbutton = document.createElement("button");
    editbutton.innerHTML = "<i class='fi fi-br-edit'></i>";
    editbutton.className = "edit-button";
    editbutton.onclick = function () {
        document.getElementById("name").value = person.name;
        lastname.value = person.lastname;
        idno.value = person.idno;
        if (person.tel != null) {
            tel.value = person.tel;
        }
        var ebutton = document.getElementById("e-person");
        ebutton.style.visibility = "visible";
        ebutton.onclick = function () {
            edit(person.counter);
        };
    }

    var cell0 = row.insertCell(0); //No
    var cell1 = row.insertCell(1); //id
    var cell2 = row.insertCell(2); //Name
    var cell3 = row.insertCell(3); //Last Name
    var cell4 = row.insertCell(4); //ID Number
    var cell5 = row.insertCell(5); //Telephone
    var cell6 = row.insertCell(6); //Delete
    var cell7 = row.insertCell(7); //Edit

    var n0 = "no" + personArray.length;
    var n1 = "id" + counter;
    var n2 = "name" + counter;
    var n3 = "lastname" + counter;
    var n4 = "idno" + counter;
    var n5 = "tel" + counter;

    cell0.setAttribute("id", n0);
    cell1.setAttribute("id", n1);
    cell2.setAttribute("id", n2);
    cell3.setAttribute("id", n3);
    cell4.setAttribute("id", n4);
    cell5.setAttribute("id", n5);

    cell0.innerHTML = personArray.length;
    cell1.innerHTML = person.id;
    cell2.innerHTML = person.name;
    cell3.innerHTML = person.lastname;
    cell4.innerHTML = person.idno;
    cell5.innerHTML = person.tel;
    cell6.appendChild(delbutton);
    cell7.appendChild(editbutton);
}

function edit(person) {
    var name = document.getElementById("name");
    var lastname = document.getElementById("lastname");
    var idno = document.getElementById("idno");
    var tel = document.getElementById("tel");

    var n0 = "no" + person;
    var n1 = "id" + person;
    var n2 = "name" + person;
    var n3 = "lastname" + person;
    var n4 = "idno" + person;
    var n5 = "tel" + person;

    var i = document.getElementById(n1);
    var n = document.getElementById(n2);
    var ln = document.getElementById(n3);
    var ino = document.getElementById(n4);
    var t = document.getElementById(n5);

    n.innerText = name.value;
    ln.innerText = lastname.value;
    ino.innerText = idno.value;
    t.innerText = tel.value;

    var ubutton = document.getElementById("e-person");
    ubutton.style.visibility = "hidden";

    var idlabel = document.getElementById("show-id");
    var namelabel = document.getElementById("show-name");
    var lastnamelabel = document.getElementById("show-lastname");
    var idnolabel = document.getElementById("show-idno");
    var tellabel = document.getElementById("show-tel");

    idlabel.value = i.innerText;
    namelabel.value = name.value;
    lastnamelabel.value = lastname.value;
    idnolabel.value = idno.value;
    tellabel.value = tel.value;

    name.value = "";
    lastname.value = "";
    idno.value = "";
    tel.value = "";
}

var sb = document.getElementById("searchbar");
sb.addEventListener("keyup", function () {
    var getWord = document.getElementById("searchbar").value;
    var table = document.getElementById("mytable");

    for (let i = 1; i < table.rows.length; i++) {
        var cells = table.rows[i].cells;
        //console.log(cells[1].innerText.includes(getWord))
        if (cells[1].innerText.includes(getWord) || cells[2].innerText.includes(getWord) || cells[3].innerText.includes(getWord) || cells[4].innerText.includes(getWord) || cells[5].innerText.includes(getWord)) {
            table.rows[i].style.display = "";
        }
        else {
            table.rows[i].style.display = "none";
        }
    }

    if (getWord == "") {
        for (let i = 0; i < table.rows.length; i++) {
            table.rows[i].style.display = "";
        }
    }
})

