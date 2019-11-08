Vue.component('todo-card',{
    template: `
      <div>
        <h1>{{title}}</h1>
        <h2>{{content}}</h2>
      </div>
    `,
    data: function(){
      return {

      }
    },
    methods: {
      
    },
    props: {
      title: {
        type: String,
        required: true,
        validator: function(input){
          if (input.length < 5){ return false}
          return true
        },
      },
      content: {}
    }
  })