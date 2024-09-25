//Title constructor function that creates a Title object
 function Title(t1) 
{ 
    this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

let studentCount = 0;

function initializePage() {
    document.getElementById('userName').innerText = "Thathykalva Charan Reddy";
    document.getElementById('userId').innerText="(NUID: 002315450)";
}



function toggleSelection(checkbox) {
    const table = document.getElementById("myTable");
    const row = checkbox.closest('tr');
    const submitButton = document.getElementById("submitButton");
    /*
    const hiddenColumns = table.querySelectorAll(".extra-columns");

    hiddenColumns.forEach(column => {
        if (checkbox.checked) {
            column.style.display = "table-cell";
        } else {
            column.style.display = "none";
        }
    });*/

    if (checkbox.checked) {
        row.style.backgroundColor = "yellow";
        submitButton.disabled = false;
        submitButton.style.backgroundColor = "orange";
        addDeleteButton(row);
        addEditButton(row);
        
    } else {
        row.style.backgroundColor = "white";
        removeButtons(row);
        checkSubmitButtonStatus();
        
    }
}
function toggleExtraColumns(checkbox) {
    var row = checkbox.parentNode.parentNode;

    var extraCols = row.querySelectorAll('.extra-columns');
    var anyChecked = document.querySelectorAll('.row-checkbox:checked').length > 0;
    var extraHeaders = document.querySelectorAll('th.extra-columns');

    extraCols.forEach(function(col) {
        if (checkbox.checked) {
            col.style.display = 'table-cell'; 
        } else {
            col.style.display = 'none'; 
        }
    });
    extraHeaders.forEach(function(header) {
        if (anyChecked) {
            header.style.display = 'table-cell'; 
        } else {
            header.style.display = 'none'; 
        }
    });
}

function addStudent() {
    studentCount++;

    const table = document.getElementById("myTable");
    const newRow = `
        <tr>
            <td><input type="checkbox" class="row-checkbox" onclick="toggleExtraColumns(this)" onchange="toggleSelection(this)"/><br /><br /><img src="down.png" width="30px" onclick="toggleDropDown(this)" /></td>
            <td>Student ${studentCount}</td>
            <td>Teacher ${studentCount}</td>
            <td>Approved</td>
            <td>Fall</td>
            <td>TA</td>
            <td>${10000+studentCount}</td>
            <td>100%</td>
            <td class="extra-columns"></td>
            <td class="extra-columns"></td>
        </tr>
        <tr class="dropDownTextArea" style="display:none;">
            <td colspan="10">
                Advisor:<br /><br />
                Award Details<br />
                Summer 1-2014(TA)<br/>
                Budget Number: <br />
                Tution details:<br/>                
                Comments:<br /><br /><br />
                Award Status:<br /><br /><br />
            </td> 
            </tr>`;

    table.insertAdjacentHTML('beforeend', newRow);

    setTimeout(function() {
        alert(`Student ${studentCount} added successfully`);
    }, 10); 
}

function toggleDropDown(imgElement) {
    const row = imgElement.closest('tr').nextElementSibling;
    row.style.display = row.style.display === "none" ? "table-row" : "none";
}

function addDeleteButton(row) {
    let deleteCell = row.cells[8];
    if (deleteCell.innerHTML === "") {
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.onclick = function () {
            const rowContent = row.cells[1].innerText;
            row.remove();  
            if (row.nextElementSibling) {
                row.nextElementSibling.remove(); 
            }
            setTimeout(function() {
                alert(`${rowContent} Record deleted successfully!`);
            }, 10);
            
            checkSubmitButtonStatus();  
        };
        deleteCell.appendChild(deleteButton);
    }
}

function addEditButton(row) {
    let editCell = row.cells[9]; 
    if (editCell.innerHTML === "") {
        const editButton = document.createElement("button");
        editButton.innerText = "Edit";
        editButton.onclick = function () {
            showEditPopup(row); 
        };
        editCell.appendChild(editButton);
    }
}

function showEditPopup(row) {
    const studentName = row.cells[1].innerHTML; 
    const teacherName = row.cells[2].innerHTML;
    const status = row.cells[3].innerHTML; 
    const semester = row.cells[4].innerHTML; 
    const taStatus = row.cells[5].innerHTML; 
    const budget = row.cells[6].innerHTML; 
    const percentage = row.cells[7].innerHTML; 

    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerHTML = `
        <div class="popup-content">
            <h2>Edit details of ${studentName}</h2>
            <p><strong>Student:</strong> ${studentName}</p>
            <p><strong>Teacher:</strong> ${teacherName}</p>
            <p><strong>Status:</strong> ${status}</p>
            <p><strong>Semester:</strong> ${semester}</p>
            <p><strong>TA Status:</strong> ${taStatus}</p>
            <p><strong>Budget:</strong> ${budget}</p>
            <p><strong>Percentage:</strong> ${percentage}</p>
            <button id="okButton">Ok</button>
            <button id="cancelButton">Cancel</button>
        </div>
    `;

    document.body.appendChild(popup); 

    popup.style.position = 'fixed';
    popup.style.left = '50%';
    popup.style.top = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.backgroundColor = 'white';
    popup.style.border = '2px solid black';
    popup.style.padding = '20px';
    popup.style.zIndex = '1000';

    document.getElementById('okButton').onclick = function () {
        
        closePopup(popup); 
    };

    document.getElementById('cancelButton').onclick = function () {
        closePopup(popup); 
    };
}

function closePopup(popup) {
    document.body.removeChild(popup); 
}

function removeButtons(row) {
    row.cells[8].innerHTML = "";
    row.cells[9].innerHTML = "";
}

function checkSubmitButtonStatus() {
    const checkboxes = document.querySelectorAll('#myTable input[type="checkbox"]');
    const submitButton = document.getElementById("submitButton");
    const isAnyChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);

    if (!isAnyChecked) {
        submitButton.disabled = true;
        submitButton.style.backgroundColor = "gray";
    }
}
var socialMedia = {
    facebook : 'http://facebook.com',
    twitter: 'http://twitter.com',
    flickr: 'http://flickr.com',
    youtube: 'http://youtube.com'
  };
  
  var t = new Title("CONNECT WITH ME!");
