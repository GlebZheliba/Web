async function fetching(){
    try {
        let response = await axios.get(`${apiBase}/weatherforecast`);
        let data = response.data;
        
        let container = document.getElementById("getResult");
        container.innerHTML = '';
        
        data.forEach(element => {
            let newBlock = document.createElement("p");
            newBlock.innerText = JSON.stringify(element);
            container.appendChild(newBlock);
        });
    } catch (error) {
        alert("Ошибка");
    }
}

let getButton = document.getElementById("getbutton");
getButton.addEventListener("click",fetching);

let postButton = document.getElementById("postbutton");
postButton.addEventListener("click", async () =>{
    try {
        let response = await fetch(`${apiBase}/submitdata`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Name: "Maxim",
                Age: "22"
            })
        });
        
        let data = await response.json();
        let postResult = document.getElementById("postresult");
        postResult.innerText = JSON.stringify(data);
    } catch (error) {
        alert("Ошибка");
    }
});

function generateTable() {
    let number = parseInt(document.getElementById('numberInput').value);
    let table = document.getElementById('Table');
    table.innerHTML = ''; 

    for (let i = 1; i <= 10; i++) {
        let row = table.insertRow();
        let cell2 = row.insertCell();
        cell2.textContent = number + ' * ' + i + ' = ' + (number * i);
    }
}