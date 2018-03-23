<template>
  <div class='cc-mini-neux-todo'>
    <input class="todo-status input-checkbox" type="checkbox" v-model='item.done' @click.stop>
    <span class='cc-text'>{{item.text}}</span>
    <span class='icon icon-clock'></span>
  </div>
</template>
<script>
export default {
  props: ['item', 'item-id'],
  config: ['due', 'priority'],
  watch: {
    "item.done" : function(v) {
      cc.items.update(this.itemId, function(item){
        item.ancestor.done = v;
      })
    }
  }
}
</script>
<style lang='less'>
.cc-mini-neux-todo {
  display: flex;
  align-items: flex-start;

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
  .icon-clock {
    margin-left: 0.5em;
    &:before {
      margin-right: 0;
    }
  }
}
</style>
