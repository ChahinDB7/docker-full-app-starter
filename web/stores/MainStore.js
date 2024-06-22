import { defineStore, acceptHMRUpdate } from "pinia";
import { ref } from "vue";

export const useMainStore = defineStore("mainStore", () => {
  return {};
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMainStore, import.meta.hot));
}
