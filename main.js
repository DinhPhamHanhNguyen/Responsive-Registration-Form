 document.addEventListener('DOMContentLoaded', function() {
    const registerButton = document.getElementById('registerButton');
    registerButton.addEventListener('click', function(event) {
        event.preventDefault();
        openpop_up();
    });
});

let leftIndex = 0;
let rightIndex = 0;

function tab1_To_tab2() {
    const leftItems = document.getElementById("son").getElementsByTagName("li");
    const rightItems = document.getElementById("regis").getElementsByTagName("li");
    if (leftIndex < leftItems.length && rightIndex < rightItems.length) {
        rightItems[rightIndex].innerHTML = leftItems[leftIndex].innerHTML;
        leftItems[leftIndex].innerHTML = "";
        leftIndex++;
        rightIndex++;
    }
}

function tab2_To_tab1() {
    const leftItems = document.getElementById("son").getElementsByTagName("li");
    const rightItems = document.getElementById("regis").getElementsByTagName("li");
    if (rightIndex > 0) {
        leftItems[leftIndex - 1].innerHTML = rightItems[rightIndex - 1].innerHTML;
        rightItems[rightIndex - 1].innerHTML = "";
        leftIndex--;
        rightIndex--;
    }
}

function tab1_To_tab2double() {
    const leftItems = document.getElementById("son").getElementsByTagName("li");
    const rightItems = document.getElementById("regis").getElementsByTagName("li");
    if (leftIndex < leftItems.length - 1 && rightIndex < rightItems.length - 1) {
        rightItems[rightIndex].innerHTML = leftItems[leftIndex].innerHTML;
        rightItems[rightIndex + 1].innerHTML = leftItems[leftIndex + 1].innerHTML;
        leftItems[leftIndex].innerHTML = "";
        leftItems[leftIndex + 1].innerHTML = "";
        leftIndex += 2;
        rightIndex += 2;
    }
}

function tab2_To_tab1double() {
    const leftItems = document.getElementById("son").getElementsByTagName("li");
    const rightItems = document.getElementById("regis").getElementsByTagName("li");
    if (rightIndex > 1) {
        leftItems[leftIndex - 2].innerHTML = rightItems[rightIndex - 2].innerHTML;
        leftItems[leftIndex - 1].innerHTML = rightItems[rightIndex - 1].innerHTML;
        rightItems[rightIndex - 2].innerHTML = "";
        rightItems[rightIndex - 1].innerHTML = "";
        leftIndex -= 2;
        rightIndex -= 2;
    }
}

function verify() {
    alert("Please fill all the blank fields");
}

function add_To_table() {
    const table = document.getElementById("show");
    const row = table.insertRow(1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    
    const studentId = document.getElementById("si");
    const fullName = document.getElementById("fname");
    const dateOfBirth = document.getElementById("dob");
    const gender = document.querySelector('input[name="gen"]:checked');
    
    if (!studentId.value || !fullName.value || !dateOfBirth.value) {
        verify();
        if (!studentId.value) studentId.focus();
        else if (!fullName.value) fullName.focus();
        else dateOfBirth.focus();
    } else if (!gender) {
        alert('Please choose your gender!');
    } else {
        cell1.innerHTML = studentId.value;
        cell2.innerHTML = fullName.value;
        cell3.innerHTML = dateOfBirth.value;
        cell4.innerHTML = gender.value;
    }
}

const popup = document.getElementById("popup");

function openpop_up() {
    const studentId = document.getElementById("si");
    const fullName = document.getElementById("fname");
    const dateOfBirth = document.getElementById("dob");
    const gender = document.querySelector('input[name="gen"]:checked');
    const firstSubject = document.getElementById("firstsub");
    const secondSubject = document.getElementById("secondsub");

    if (!studentId.value || !fullName.value || !dateOfBirth.value || !gender) {
        alert("Please fill in all required fields!");
        return;
    }

    if (!firstSubject.innerHTML && !secondSubject.innerHTML) {
        alert("Please choose at least one subject!");
        return;
    }

    document.getElementById("infor1").textContent = `Student ID: ${studentId.value}`;
    document.getElementById("infor2").textContent = `Full name: ${fullName.value}`;
    document.getElementById("infor3").textContent = `Date of Birth: ${dateOfBirth.value}`;
    document.getElementById("infor4").textContent = `Gender: ${gender.value}`;
    document.getElementById("sub1").innerHTML = firstSubject.innerHTML;
    document.getElementById("sub2").innerHTML = secondSubject.innerHTML;

    popup.classList.add("open-popup");
}

function closepop_up() {
    popup.classList.remove("open-popup");
}