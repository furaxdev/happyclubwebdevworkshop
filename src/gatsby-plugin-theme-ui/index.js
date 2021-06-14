import { base, dark,  deep } from "@theme-ui/presets";
import { merge } from "theme-ui";
export default merge(base, {
  colors: {
    initialColorModeName: "light",
    modes: {
      dark: { ...dark.colors },
      deep: { ...deep.colors }
    }
  },

});
