<template>
  <div id="radar" :style="{ width: '300px', height: '300px' }"></div>
</template>
<script>
export default {
  name: "EchartsRadar",
  data() {
    return {};
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      this.chart = this.$echarts.init(document.getElementById("radar"));
      const option = {
        title: {
          text: "Multiple Radar",
        },
        tooltip: {
          trigger: "axis",
        },
        radar: [
          {
            indicator: [
              { text: "Look", max: 100 },
              { text: "Photo", max: 100 },
              { text: "System", max: 100 },
              { text: "Performance", max: 100 },
              { text: "Screen", max: 100 },
              { text: "Screen", max: 100 },
            ],
            radius: 80,
            center: ["50%", "60%"],
          },
        ],
        series: [
          {
            type: "radar",
            tooltip: {
              trigger: "item",
            },
            areaStyle: {},
            data: [
              {
                value: [60, 73, 85, 40, 64, 12],
                name: "A Software",
              },
            ],
          },
        ],
      };
      this.chart.setOption(option);
    },
  },
};
</script>
<style></style>
