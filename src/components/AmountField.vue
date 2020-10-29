<template>
  <section class="amount-field">
    <div class="form-group">
      <label for="amount">Amount</label>
      <input 
        type="number"
        id="amount"
        class="form-control"
        :value="amount.$model"
        @input="onChangeAmount($event.target.value)"
      >
      <div v-if="amount.$error && amount.$dirty" class="alert alert-danger mt-1">
        <div v-if="amount.required.$invalid">{{ amount.required.$message }}</div>
        <div v-else-if="amount.numeric.$invalid">{{ amount.numeric.$message }}</div>
        <div v-else-if="amount.minValue.$invalid">{{ amount.minValue.$message }}</div>
      </div>
    </div>
  </section>
</template>

<script>
  export default  {
    name: 'amount-field',
    props: ['amount', 'onAmount'],
    methods: {
      onChangeAmount(value) {
        this.$emit('amount', value)
      }
    }
  }
</script>