<template>
  <section class="expense-form">
    <div class="jumbotron">
      <h2>Create Expense</h2> 
      <hr />
      <form novalidate autocomplete="off" @submit.prevent="create()">
        <!-- ----------------- -->
        <!----- Name Field ------>
        <!-- ----------------- -->
        <NameField :name="$v.f.name" @name="changeName($event)" />

        <!-- ------------------- -->
        <!--  Description Field --->
        <!-- ------------------- -->
        <DescriptionField :description="$v.f.description" @description="changeDescription($event)" />

        <!-- ------------- -->
        <!--  Amount Field -->
        <!-- ------------- -->
        <AmountField :amount="$v.f.amount" @amount="changeAmount($event)" />

        <!-- ------------- -->
        <!-- Create Button -->
        <!-- ------------- -->
        <SubmitButton :value="buttonValue" />
      </form>

      <!-- Show messages -->
      <div v-if="success != ''" class="alert alert-success">
        {{ success }}
      </div>
      <div v-else-if="errors != ''" class="alert alert-danger">
        {{ errors }}
      </div>
    </div>
  </section>
</template>

<script>
  import { required, maxLength, minLength, numeric, minValue } from '@vuelidate/validators';
  import AmountField from './AmountField.vue';
  import DescriptionField from './DescriptionField.vue';
  import NameField from './NameField.vue';
  import SubmitButton from './Button.vue';

  export default  {
    name: 'expense-form',
    props: [],
    components : {
      AmountField,
      DescriptionField,
      NameField,
      SubmitButton
    },
    data () {
      return {
        f: this.reset(),
        url: 'https://5f94bcac2de5f50016ca1a6f.mockapi.io/expenses',
        errors: '',
        success: '',
        buttonValue: 'Create'
      }
    },
    validations: {
      f: {
        amount: { 
          required,
          numeric,
          minValue: minValue(1),
        },
        description: { 
          required,
          minLength: minLength(1)
        },
        name: { 
          required,
          maxLength: maxLength(15),
          minLength: minLength(5)
        },
      }
    },
    methods: {
      /* form reset */
      reset() {
        return {
          amount: '',
          description: '',          
          name: ''
        }
      },
      changeDescription(description) {
        this.$v.f.description.$model = description;
      },
      changeName(name) {
        this.$v.f.name.$model = name;
      },
      changeAmount(amount) {
        this.$v.f.amount.$model = amount;
      },
      /* Submit form */
      async create() {
        this.errors = ''
        this.success = ''
        this.$v.$touch()
        if(!this.$v.$invalid) {
          let fields = this.f
          await this.send(fields)
          this.f = this.reset()
          this.$v.$reset()
        }
      },
      /* Send form to mockapi */
      send(fields) {
        this.axios.post(this.url, fields, {'content-type': 'application/json'})
          .then(res => {
            if (res.data) {
              this.success = "Expense created"
              setTimeout(() => {
                this.success = ""
              }, 3000);
            }
          })
          .catch(error => {
            this.errors = "Something went wrong: " + error.message
            setTimeout(() => {
              this.errors = ""
            }, 3000);
          })
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
</style>