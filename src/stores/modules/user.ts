import { defineStore } from "pinia"
import { store } from "@/stores"

export const useUserStore = defineStore('userInfo', () => {
  


})

export function useUserStoreHook() {
  return useUserStore(store);
}
