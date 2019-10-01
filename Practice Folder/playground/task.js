const tasks =  {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    }, {
        text: 'Clean yard',
        completed: false
    },
    {
        text: 'Film course',
        completed: false
    }],
    getTaskToDo: function (tasks){
        return tasksToDo = this.tasks.filter(() => tasks.completed === false   
        )
    }
}