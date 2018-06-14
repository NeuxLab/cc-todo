const { Vue } = require('cc')

module.exports = {
  initialize() {
    Vue.component('cc-neux-todo', require('./components/todo'))
    Vue.component('tab-guide-neux-todo', require('./components/tab-guide'))
  },
  todo (input) {
    return {type: 'neux.todo', text: input.value, done: false, priority: 0}
  },
}
