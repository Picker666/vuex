<template>
  <div>
    <h2>this is second page</h2>
    <p>count: {{ count }} <button @click="handleClick">+</button></p>

    <p>times: {{ times }} <button @click="handleTimesClick">+</button></p>

    <p>advanced count: {{ advancedCount }}</p>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'SecondPage',
  computed: {
    ...mapState('base', ['count', 'times']),
    ...mapState({
      advancedCount: state => state.advanced.count
    })
  },
  methods: {
    handleClick() {
      this.asyncIncrement(10);
      this.syncIncrement(2);
    },
    handleTimesClick() {
      this.incrementTimes();
    },
    ...mapActions('base', ['asyncIncrement', 'incrementTimes', 'syncIncrement'])
  }
}
</script>