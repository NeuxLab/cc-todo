<template>
  <cc-card :record='record' class='cc-neux-todo' :class="[item.done ? 'done' : '']" source="">
    <input class="todo-status input-checkbox" type="checkbox" v-model='item.done' @click.stop>
    <span class='cc-text'>{{item.text}}</span>
  </cc-card>
</template>
<script>
export default {
  props: ['record'],
  computed: {
    item() {
      return this.record.ancestor
    },
  },
  watch: {
    "item.done" : function(v) {
      cc.items.update(this.record._id, function(item){
        item.ancestor.done = v;
      })
    }
  }
}
</script>
<style lang='less'>
.cc-neux-todo {
  .todo-status {
    margin-right: 1em;
  }
  &.done .cc-text {
    opacity: 0.6;
  }
  .cc-text {
    flex: 1;
  }
  .cc-content {
    display: flex;
  }
}
</style>
