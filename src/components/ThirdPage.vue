<template>
  <div>
    <h2>this is third page...</h2>
    <p>count: {{ count }} <button @click="handlePlus">+</button><button @click="handleMinus">-</button></p>
    <p>is double: {{ double }}</p>
    <p>base count: {{ baseCount }}</p>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex';
export default {
  name: 'thirdPage',
  computed: {
    ...mapState({
      count: state => state.advanced.count,
      baseCount: state => state.base.count
    }),
    ...mapGetters(['double'])
  },
  methods: {
    ...mapMutations(['increment', 'decrement', 'base/increment']),
    ...mapActions(['syncIncrement', 'asyncIncrement', 'asyncCalc']),
    handlePlus: function () {
      this.increment(1);
      this.$store.commit('increment', 2);
      this.syncIncrement(3);
      this.asyncIncrement(4);
      this.asyncCalc(5);
      this['base/increment'](10);
    },
    handleMinus: function () {
      this.$store.commit('decrement', 1);
      this.decrement(2);
    }
  }
}
</script>