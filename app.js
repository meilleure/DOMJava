var selectedRow = null;
if (selectedRow == null){

  updateBtn.style.visibility = 'hidden';

}

function onFormSubmit(){
  var formData = readFormData();
  if (selectedRow == null)
  insertNewRecord(formData);
  else 
  updateRecord(formData);
  resetForm();
}


function readFormData(){
var formData = {};
formData["firstname"] = document.getElementById("firstname").value;
formData["lastname"] = document.getElementById("lastname").value;
formData["Email"] = document.getElementById("Email").value;
formData["gender"] = document.getElementById("gender").value;
formData["select"] = document.getElementById("select").value;
return formData;

}

function insertNewRecord(data){

var table = document.getElementById("display").getElementsByTagName('tbody')[0];
var newRow = table.insertRow(table.length);
cell1 = newRow.insertCell(0);
cell1.innerHTML = data.firstname;
cell2 = newRow.insertCell(1);
cell2.innerHTML = data.lastname;
cell3 = newRow.insertCell(2);
cell3.innerHTML = data.Email;
cell4 = newRow.insertCell(3);
cell4.innerHTML = data.gender;
cell5 = newRow.insertCell(4);
cell5.innerHTML = data.select;
cell6 = newRow.insertCell(5);
cell6.innerHTML = `<button onClick="onEdit(this)"><a>Edit</a></button>`;
cell7 = newRow.insertCell(6);
cell7.innerHTML = `<button onClick="onDelete(this)"><a>Delete</a></button>`;

if (select.checked == true){

    cell5.innerHTML = "Yes"

}

else{
     cell5.innerHTML = "No"

}

}

function resetForm(){

document.getElementById("firstname").value = "";
document.getElementById("lastname").value = "";
document.getElementById("Email").value = "";
document.getElementById("gender").value = "";
document.getElementById("select").value = "";

selectedRow = null;

}

function onEdit(td) {
  
selectedRow = td.parentElement.parentElement;
document.getElementById("firstname").value = selectedRow.cells[0].innerHTML;
document.getElementById("lastname").value = selectedRow.cells[1].innerHTML;
document.getElementById("Email").value = selectedRow.cells[2].innerHTML;
document.getElementById("gender").value = selectedRow.cells[3].innerHTML;
document.getElementById("select").value = selectedRow.cells[4].innerHTML;
updateBtn.style.visibility = 'visible';
submitBtn.style.visibility = 'hidden';
}


function updateRecord(formData){

selectedRow.cells[0].innerHTML = formData.firstname;
selectedRow.cells[1].innerHTML = formData.lastname;
selectedRow.cells[2].innerHTML = formData.Email;
selectedRow.cells[3].innerHTML = formData.gender;
selectedRow.cells[4].innerHTML = formData.select;
submitBtn.style.visibility = 'visible';
updateBtn.style.visibility = 'hidden';

if (select.checked == true){

    cell5.innerHTML = "Yes"

}

else{

     cell5.innerHTML = "No"
}

}

function onDelete(td){
 if(confirm('Are you sure you want to delete this record?')){
row = td.parentElement.parentElement;
document.getElementById("display").deleteRow(row.rowIndex);
resetForm();

   }
}








