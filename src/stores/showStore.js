import { defineStore } from 'pinia'
import { useSessionStorage } from '../composables/useSessionStorage'

export const useShowStore = defineStore('shows', () => {
  const text = useSessionStorage('text', '')
  const fontSize = useSessionStorage('fontSize', 70)
  const scrollSpeed = useSessionStorage('scrollSpeed', 1)


  return { text, fontSize, scrollSpeed }
})
