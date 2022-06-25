<template>
  <v-container>
    <v-card>
      <echarts-radar></echarts-radar>
    </v-card>
    <echarts-gauge></echarts-gauge>
  </v-container>
</template>

<script>
import EchartsRadar from "./components/EchartsRadar";
import EchartsGauge from "@/views/About/components/EchartsGauge";
export default {
  name: "AboutPage",
  components: { EchartsGauge, EchartsRadar },
};
</script>
