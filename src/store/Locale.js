import { defineStore } from "pinia";
import axios from "axios";
import { useI18n } from "vue-i18n";

export const useLocaleStore = defineStore("localeStore", {
  id: "locale",
  state: () => ({
    locales: [],
    currentLocale: "",
    fallbackLocale: useI18n().fallbackLocale.value,
  }),
  actions: {
    async fetchLocales() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/locales");
        this.locales = response.data.locales;
        this.setLocale();
      } catch (error) {
        this.locales = [];
      }
    },
    setLocale() {
      const currentLocale =
        localStorage.getItem("locale") ?? process.env.VUE_APP_I18N_LOCALE;

      const existLocales = this.locales.find(
        (locale) => locale.code === currentLocale
      );

      if (currentLocale !== "" && existLocales) {
        this.locale = currentLocale;
        this.currentLocale = this.locales.find(
          (locale) => locale.code === currentLocale
        )?.code;
        return;
      }

      this.locale = this.fallbackLocale;
      this.currentLocale = this.fallbackLocale;
    },
  },
  getters: {},
});
