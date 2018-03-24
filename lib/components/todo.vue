<template>
  <cc-card :record='record' class='cc-neux-todo' :class="[item.done ? 'done' : '']" source="">
    <todo :item="item" :item-id="this.record._id"></todo>
  </cc-card>
</template>
<script>
import Todo from './mini.vue'
export default {
  props: ['record'],
  components: {
    todo: Todo
  },
  computed: {
    item() {
      return this.record.ancestor
    },
  },
}
</script>
<style lang='less'>
.cc-neux-todo {
  &.done .cc-text {
    opacity: 0.6;
  }
}
</style>
