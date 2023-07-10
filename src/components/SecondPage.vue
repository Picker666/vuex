<template>
  <div>
    <h2>this is second page</h2>
    <p>count: {{ count }} <button @click="handleClick">+</button></p>

    <p>times: {{ times }} <button @click="handleTimesClick">+</button></p>

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'SecondPage',
  computed: {
    ...mapState(['count', 'times'])
  },
  methods: {
    handleClick() {
      this.asyncIncrement(10);
    },
    handleTimesClick() {
      this.incrementTimes();
    },
    ...mapActions(['asyncIncrement', 'incrementTimes'])
  }
}
</script>