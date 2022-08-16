const API_URL = "https://my-json-server.typicode.com/Davidfcg20/App-Trello-DavidC"

axios
    .get(`${API_URL}/task`)
    .then((res) => showAllTask(res.data))
    .catch((err) => console.log(err))

const showAllTask = (data) => {
    data.map((task) => addTask(task))
}


//Extraer variables del DOOM
const btn = document.querySelector('#btnSubmit')
const list1 = document.querySelector('#listDo')
const list2 = document.querySelector('#listProgres')
const list3 = document.querySelector('#listEnd')

Sortable.create(list1, {
    Animation: 150,
    chosenClass: "seleccionado",
    dragClass: 'drag',
    group: {
        name: 'shared',
        put: true
    }
});

Sortable.create(list2, {
    group: 'shared',
    animation: 150
}
);

Sortable.create(list3, {
    group: 'shared',
    animation: 150
}
);

btn.addEventListener('click', (e) => {
    e.preventDefault()
    addTask()
})

const addTask = (task) => {

    var newTask = document.createElement('div');
    newTask.setAttribute('class', 'tarea m-2 p-2');


    newTask.innerHTML += `
        <h4>${task.title}</h4>
        <hr>
        <p class="float">${task.details}</p>
        <br>
        <h6>Responsable:${task.person}<br> Fecha: ${dateFormat(task.deadline)}</h6>        
    `

    if (task.state === "to-do") {
        list1.appendChild(newTask);
    }
    if (task.state === "done") {
        list3.appendChild(newTask);
    }
    if (task.state === "in-progress") {
        list2.appendChild(newTask);
    }


}

