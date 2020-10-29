<template>
  <section class="navbar">
    <nav class="navbar navbar-expand-lg navbar-dark bg-info">
      <router-link to="/">
        <a class="navbar-brand" href="#">Home</a>
      </router-link>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/create-expense">
              <a class="nav-link" href="#">Create Expense</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/list-expenses">
              <a class="nav-link" href="#">List Expenses</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/multiple-choice">
              <a class="nav-link" href="#">Multiple Choice</a>
            </router-link>
          </li>
        </ul>
      </div>      
    </nav>
  </section>
</template>

<script>
  export default  {
    name: 'navbar',
    props: []
  }
</script>