<template>
  <div class="container-sm container-fluid d-flex justify-content-center pt-5">
    <div class="col-sm-4">
      <h1>Text editor here</h1>
      <textarea
        class="form-control form-control-sm"
        v-model="inputText"
        type="text"
        rows="20"
        placeholder="Enter text..."
      ></textarea>

      <div class="container d-flex flex-row-reverse p-0 pt-2">
        <a @click="submitText" class="btn btn-primary" role="button">Show</a>
      </div>
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
