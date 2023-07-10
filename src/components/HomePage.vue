<template>
  <div>
    <h2>this is home page</h2>
    <p>$store.state.count: {{ $store.state.count }}</p>
    <p>count: {{ count }}</p>
    <p>count1: {{ count1 }}</p>
    <p>countPlusLocalState: {{ countPlusLocalState }}</p>
    <p>times: {{ times }}</p>
    <p>times1: {{ times1 }}</p>

    <p><button @click="handlePlus">+</button></p>
    <p><button @click="handleTimesPlus">times+</button></p>

    <p>{{ doneToDos }}</p>
    <p>{{ doneToDosCount }}</p>
    <p>{{ toDoById }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'homePage',
  data: function () {
    return {
      localCount: 10
    }
  },
  computed: {
    // count: function () { return this.$store.state.count; }
    ...mapState('base', {
      count1: state => state.count,
      times1: 'times',
      // times1: state => state.times1,
      countPlusLocalState(state) {
        console.log('state: ', state);
        return this.localCount + state.count;
      }
    }),
    ...mapState('base', ['count', 'times']),
    ...mapGetters('base', ['doneToDos', 'doneToDosCount']),
    toDoById() {
      console.log('this.$store: ', this.$store);
      return this.$store.getters['base/getTodoById'](2);
    }
  },
  methods: {
    handlePlus() {
      this.$store.commit('base/increment');
    },
    handleTimesPlus() {
      this.$store.commit('base/timesIncrease');
    }
  }
}
</script>