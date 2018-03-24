'use babel';

import { Vue, CompositeDisposable, fileURLToPath } from 'cc'
module.exports = {
  initialize(state) {
    Vue.component('cc-neux-todo', require('./components/todo'))
  },
  todo (input) {
    return {type: 'neux.todo', text: input.value, done: false, priority: 0}
  },
}
