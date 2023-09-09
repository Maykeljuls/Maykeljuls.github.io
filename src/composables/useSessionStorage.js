import { ref, watch } from 'vue'

export function useSessionStorage(key, defaultValue) {
    const storedValue = ref(JSON.parse(localStorage.getItem(key)) || defaultValue)

    watch(storedValue, (newValue) => {
        localStorage.setItem(key, JSON.stringify(newValue))
    })

    return storedValue
}