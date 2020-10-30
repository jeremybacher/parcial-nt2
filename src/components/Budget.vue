<template>
  <section class="budget-modal">
    <div class="modal" id="loadBudget">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title text-primary">Load Budget</h4>
            <button type="button" id="close" class="close" data-dismiss="modal">&times;</button>
          </div>
          <div class="modal-body">
            <label for="inputBudget" class="text-secondary">Budget</label>
            <input 
              type="number"
              id="inputBudget"
              class="form-control"
              v-model="budget"
              placeholder="Complete with your budget"
            >
            <div v-if="errors != ''" class="alert alert-danger">
              {{ errors }}
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="changeBudget()">Load Budget</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default  {
    name: 'budget-modal',
    props: ['onBudget'],
    data() {
      return {
        budget: 0,
        errors: "",
      }
    },
    methods: {
      changeBudget() {
        if(!isNaN(this.budget) && this.budget > 0) {
          this.$emit('budget', this.budget)
          document.getElementById('close').click();
        } else {
          this.errors = "invalid budget"
          setTimeout(() => {
            this.errors = ""
          }, 5000);
        }
      }
    }
  }
</script>
