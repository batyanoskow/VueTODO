
const { createApp } = Vue
createApp({
  data() {
    return {
      newTask : "",
      todos : this.getTasks(),
     

    }
  },
  watch: {
    todos : {
      handler: function(todos) {
        this.saveTasks(todos);
      },
      deep: true
    }

  },
  methods : {
      addTask(e){
          if(this.newTask != "")
          {
          
            e.preventDefault();
            this.todos.push({
              title : this.newTask,
              id : Math.round(Math.random()* 1000000),
              done : false
            })
            this.newTask  = '';
          }

       },
      deleteTask(index){
        this.todos.splice(index, 1)
      },
      saveTasks(todos){
        localStorage.setItem("tasks", JSON.stringify(todos));
      },
      getTasks(){
        let todos = JSON.parse(localStorage.getItem("tasks") || '[]');
        return todos;
      }
  }

}).mount('#wrapper');
