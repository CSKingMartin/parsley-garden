import { defineStore } from "pinia";

export const useGlobalStore = defineStore("global", {
  state: () => ({
    color: "shamrock" as String,
  }),
});
