<template>
  <div class="container mt-5">
    <h1>Text editor here</h1>
    <div class="mb-3 col-5">
      <label for="" class="form-label">Enter lyrics</label>
      <textarea class="form-control narrow-textbox" v-model="inputText" type="text" rows="10"></textarea>
      <a @click="submitText" class="btn btn-primary" role="button">Submit</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputText: ''
    }
  },
  methods: {
    submitText() {
      this.$router.push({ name: 'show', query: { content: this.inputText } })
    }
  }
}
</script>
