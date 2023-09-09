import { defineStore } from 'pinia'
import { useSessionStorage } from '../composables/useSessionStorage'


export const useShowStore = defineStore('shows', () => {
  const text = useSessionStorage('text', '')
  const fontSize = useSessionStorage('fontSize', 70)
  return { text, fontSize }
})
