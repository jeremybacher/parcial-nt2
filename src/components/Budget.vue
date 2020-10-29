<template>
  <section class="budget-modal">
    <!-- The Modal -->
    <div class="modal" id="loadBudget">
      <div class="modal-dialog">
        <div class="modal-content">
          <!-- Modal Header -->
          <div class="modal-header">
            <h4 class="modal-title text-primary">Load Budget</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>
          <!-- Modal body -->
          <div class="modal-body">
            <label for="inputBudget" class="text-secondary">Budget</label>
            <input 
              type="number"
              id="inputBudget"
              class="form-control"
              v-model="$v.f.budget.$model"
            >
            <div v-if="$v.f.budget.$error && $v.f.budget.$dirty" class="alert alert-danger mt-1">
              <div v-if="$v.f.budget.required.$invalid">{{ $v.f.budget.required.$message }}</div>
              <div v-else-if="$v.f.budget.minValue.$invalid">{{ $v.f.budget.minValue.$message }}</div>
            </div>
          </div>
          <!-- Modal footer -->
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal" @click="changeBudget()">Load Budget</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { required, numeric, minValue } from '@vuelidate/validators'

  export default  {
    name: 'budget-modal',
    props: ['onBudget'],
    data() {
      return {
        f: this.reset(),
      }
    },
    validations: {
      f: {
        budget: { 
          required,
          numeric,
          minValue: minValue(1),
        }
      }
    },
    methods: {
      changeBudget() {
        this.$v.$touch()
        if(!this.$v.$invalid) {
          let form = this.f
          this.$emit('budget', form.budget)
          this.f = this.reset()
          this.$v.$reset()
        }
      },      
      reset() {
        return {
          budget: 1
        }
      }
    }
  }
</script>
