<template>
  <div class="container mt-5">
    <h1>Text editor here</h1>
    <div class="mb-3 col-5">
      <label for="" class="form-label">Enter lyrics</label>
      <textarea
        class="form-control narrow-textbox"
        v-model="inputText"
        type="text"
        rows="10"
      ></textarea>
      <br>
      <a @click="submitText" class="btn btn-primary" role="button">Show</a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useShowStore } from '../stores/showStore'
import { useRouter } from 'vue-router'

const store = useShowStore()
const inputText = ref(store.text)
const router = useRouter()

const submitText = () => {
  store.text = inputText.value
  inputText.value = store.text

  const content = store.text
  if (content) {
    router.push({ name: 'show' })
  }
}

</script>
