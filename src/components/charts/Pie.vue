
<template>
    <div>
        <apexchart class="pie-chart" :width="width" :height="height" type="pie" :options="chartOptions" :series="data.series">
        </apexchart>
    </div>
</template>

<script>
let defaultOptions = {
    chart: {
        type: 'pie-chart'
    },
    legend: {
        show: false
    },
    title: {
        text: '',
        offsetY: 8
    },
    plotOptions: {},
    labels: []
};
export default {
    name: 'Pie',
    props: {
        tite: {
            type: String
        },
        colors: {
            type: Array
        },
        width: {
            type: [Number, String]
        },
        height: {
            type: [Number, String],
            default: '300px'
        },
        data: {
            type: Object,
            required: true
        },
        options: {
            type: Object,
            default: null
        }
    },
    components: {
        apexchart: () => import('vue-apexcharts')
    },
    computed: {
        chartOptions() {
            let chartOptions = this.$parent.populateChartOptions(defaultOptions);
            chartOptions.labels = this.data.categories;
            return chartOptions;
        }
    },
    created() {
    },
};
</script>

<style lang="scss" scoped>
</style>
