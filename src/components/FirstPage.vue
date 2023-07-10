<template>
  <div>
    <h2>this is first page</h2>
    <p>count: {{ count }} <button @click="handleClick">+</button></p>

    <p>times: {{ times }} <button @click="handleTimesClick">+</button></p>

  </div>
</template>

<script>
import {mapState, mapMutations } from 'vuex';
export default {
  name: 'FirstPage',
  computed: {
    ...mapState(['count', 'times'])
  },
  methods: {
    handleClick() {
      this.$store.commit('increment', 10);
      this.increment(11);
    },
    handleTimesClick() {
      this.$store.commit({ type: 'timesIncrease', times: 100 });
      this.timesIncrease({ times: 101 });
    },
    ...mapMutations(['increment', 'timesIncrease'])
  }
}
</script>