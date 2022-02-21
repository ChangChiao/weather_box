import { defineStore } from "pinia";
import { getAjax } from "../utils/api";
export const useStore = defineStore("weather", {
  state: () => ({
    info: {},
    zone: "大安區",
    column: ["Wx", "MinT", "MaxT"],
  }),
  actions: {
    updateInfo(obj) {
      this.info = obj;
    },
    async getWeather() {
      const result = await getAjax();
      const obj = {};
      try {
        const list = result.records?.locations[0]?.location;
        const target = list.find((item) => item.locationName === this.zone);
        target.weatherElement &&
          target.weatherElement.forEach((vo) => {
            if (this.column.includes(vo.elementName)) {
              obj[vo.elementName] = vo;
            }
          });
        console.log("obj", obj);
      } catch (error) {
        console.log("error", error);
      }
    },
  },
});
