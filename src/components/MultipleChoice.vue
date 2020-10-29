<template>
  <section class="multiple-choice">
    <div class="jumbotron">
      <h2>Multiple Choice</h2>
      <hr />
      <div v-if="questions.length">
        <div class="table-responsive">
          <table class="table">
            <tr class="bg-success text-white">
              <th>Question Number</th>
              <th>Answers</th>
            </tr>
            <tr
              class="bg-info text-white"
              v-for="(question, index) in questions"
              :key="index"
            >
              <td>{{ question.question }}</td>
              <td >{{ question.answers.join(",") }}</td>
            </tr>
          </table>          
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "multiple-choice",
  props: [],
  data() {
    return {
      questions: [
        {
          question: 1,
          answers: ['B', 'D'],
        }, 
        {
          question: 2,
          answers: ['B'],
        }, 
        {
          question: 3,
          answers: ['C'],
        }, 
        {
          question: 4,
          answers: ['D'],
        }, 
        {
          question: 5,
          answers: ['B', 'E'],
        },        
      ]
    };
  },
};
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
