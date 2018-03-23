<template>
  <cc-card :record='record' class='cc-neux-todo' :class="[item.done ? 'done' : '']" source="">
    <cc-mini-neux-todo :item="item" :item-id="this.record._id"></cc-mini-neux-todo>
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
}
</script>
<style lang='less'>
.cc-neux-todo {
  &.done .cc-text {
    opacity: 0.6;
  }
}
</style>
