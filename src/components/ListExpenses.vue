<template>
  <section class="list-expenses">
    <div class="jumbotron">
      <h2>List Expenses</h2>
      <button type="button" class="btn btn-primary load-button" data-toggle="modal" data-target="#loadBudget">
        Load Budget
      </button>
      <Budget @budget="changeBudget($event)" />
      <hr />
      <div class="table-responsive">
        <table class="table">
          <tr class="bg-success text-white">
            <th>Name</th>
            <th>Description</th>
            <th>Amount</th>
            <th>CreatedAt</th>
          </tr>
          <tr
            class="bg-info text-white"
            v-for="(expense, index) in expenses"
            :key="index"
          >
            <td>{{ expense.name }}</td>
            <td>{{ expense.description }}</td>
            <td>{{ addMoneySign(expense.amount) }}</td>
            <td>{{ dateFormat(expense.createdAt) }}</td>
          </tr>
          <tr
            class="table-light"
            :style="{
              'color': showTotalAmount(),
            }"
          >
            <td colspan="4" class="text-center">The total amount is {{ addMoneySign(totalAmount) }}</td>
          </tr>
        </table>

        <!-- Show errors -->
        <div v-if="errors != ''" class="alert alert-danger">
          {{ errors }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import filters  from '../filters.js'
  import Budget from './Budget.vue';

  export default  {
    name: 'list-expenses',
    props: [],
    components : {
      Budget
    },
    mixins: [filters],
    mounted () {
      this.fetchExpenses()
    },
    data () {
      return {
        url: 'https://5f94bcac2de5f50016ca1a6f.mockapi.io/expenses',
        expenses: [],
        totalAmount: 0,
        errors: '',
        budget: 0
      }
    },
    methods: {
      /* fetch expenses */
      async fetchExpenses() {
        this.axios(this.url)
          .then(res => {
            if (res.data.length > 0) {
              this.expenses = res.data
              this.expenses.forEach(expense => this.totalAmount += Number.parseInt(expense.amount));
            } else {
              this.errors = 'No expenses were found'
            }            
          })
          .catch(error => this.errors = error.message)
      },
      showTotalAmount() {
        if (this.totalAmount == 0) {
          return 'blue'
        } else if (this.totalAmount <= this.budget) {
          return 'red'
        } else if (this.totalAmount < 1000) {
          return 'green'
        } else if (this.totalAmount >= 1000 && this.totalAmount <= 5000) {
          return 'magenta'
        } else {
          return 'orange'
        }
      },
      changeBudget(budget) {
        this.budget = budget;
      },
    }
  }
</script>

<style scoped lang="css">
  .jumbotron {
    background-color: rgb(114, 19, 51);
    color: white;
    padding: 2rem 2rem;
  }
  hr {
    background-color: #ddd;
  }
  .load-button {
    float: right;
    margin-top: -45px;
  }
</style>