const itc701Task = document.getElementById('ITC701');
const it709Task = document.getElementById('IT709');
const it607Task = document.getElementById('IT607');
const it721Task = document.getElementById('IT721');
const it712Task = document.getElementById('IT712');
const workTask = document.getElementById('work');
const removeBtn = document.getElementById('remove')
const taskContainer = document.querySelector('.task-container')
const scheduleContainer = document.querySelector('.schedule-container')
const resetBtn = document.querySelector('.deleteBtn');
const popUp = document.querySelector('.pop-up-container');
const noBtn = document.getElementById('btn-no');
const yesBtn = document.getElementById('btn-yes');

let selectedColor, active
//event listeners
taskContainer.addEventListener('click', selectTask)
scheduleContainer.addEventListener('click', setColors)
removeBtn.addEventListener('click', resetTasks)
resetBtn.addEventListener('click', openPopup);
noBtn.addEventListener('click', closePopup);
yesBtn.addEventListener('click', deleteTasks);

// Task click
function selectTask(e) {
    resetTasks()
    taskColor = e.target.style.backgroundColor
    // if (Object.keys(taskColor).length === 0) {
    //     console.log("There is no color")
    // }
    //  console.log("I am here in selectTask")
    //  console.log(Object.values(taskColor))
    switch (e.target.id) {
        case 'ITC701':
            activeTask(itc701Task, taskColor);
            icon = '<i class="fas fa-users"></i>';
            break
        case 'IT709':
            activeTask(it709Task, taskColor);
            icon = '<i class="fab fa-wordpress"></i>';
            break
        case 'IT607':
            activeTask(it607Task, taskColor);
            icon = '<i class="fa fa-database"></i>';
            break
        case 'IT721':
            activeTask(it721Task, taskColor);
            icon = '<i class="fas fa-cogs"></i>';
            break
        case 'IT712':
            activeTask(it712Task, taskColor);
            icon = '<i class="fab fa-teamspeak"></i>';
            break
        case 'work':
            activeTask(workTask, taskColor);
            icon = '<i class="fas fa-money-bill-alt"></i>';
            break
        default:
            activeTask(removeBtn, 'violet')
            icon = ''
            //  console.log("RemoveBTN")
            break
    }
}

// Set colors for schedule
function setColors(e) {
    if (e.target.classList.contains('part-task') && active === true) {
        e.target.style.backgroundColor = selectedColor
        e.target.innerHTML = icon
        // console.log("I am here in setColors")
    }


}

// Select task

function activeTask(task, color) {
    task.classList.toggle('selected')

    if (task.classList.contains('selected')) {
        active = true
        selectedColor = color
        return selectedColor
    }

    active = false
}


//reset tasks
function resetTasks() {

    const allTasks = document.querySelectorAll('.task-name')
    allTasks.forEach((item) => {
        item.className = 'task-name'
    })
}

// Delete tasks
function deleteTasks() {
    const tasks = document.querySelectorAll('.part-task');

    tasks.forEach((item) => {
        item.innerHTML = '';
        item.style.backgroundColor = 'violet';
    })

    closePopup();
}

// Open Pop-up
function openPopup() {
    popUp.style.display = 'flex';
}

// Close Pop-up
function closePopup() {
    popUp.style.display = 'none';
}