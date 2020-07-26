<template>
    <div class="traffic-light">
        <div v-for="trafficLightWindow in this.$store.state.trafficLightParam" :key="trafficLightWindow.color">
            <traffic-light-window :color="trafficLightWindow.color" :activeColor="activeColor" :time="time" :flicker="flicker"/>
        </div>
    </div>
</template>

<script>
    import trafficLightWindow from '@/components/trafficLightWindow';

    const oneSecond = 1000;

    export default {
        name: 'traffic-light',
        props: ['activeColor'],
        components: {
            trafficLightWindow
        },
        data() {
            return {
                time: null,
                instanceInterval: null,
                flicker: null,
            }
        },
        computed: {
            getNextActiveWindow() {
                this.$store.commit('setNextActiveWindow', this.activeColor);
                return this.$store.state.nextActiveWindow;
            }
        },
        watch: {
            time(time) {
                localStorage.time = time;
            },
            activeColor(activeColor) {
                localStorage.activeColor = activeColor;
            },
            $route() {
                this.startTimer();
            }
        },
        mounted() {
            this.startTimer();
        },
        methods: {
            startTimer() {
                const nextActiveWindow = this.getNextActiveWindow;

                if ((localStorage.time) && (localStorage.activeColor === this.activeColor)) {
                    nextActiveWindow.timeForReplace = localStorage.time * 1000;
                    this.time = localStorage.time;
                } else {
                    this.time = nextActiveWindow.timeForReplace / oneSecond;
                }

                setTimeout(() => {
                    localStorage.removeItem('time');
                    this.$router.push(nextActiveWindow.color);
                }, nextActiveWindow.timeForReplace);

                if (this.instanceInterval) {
                    clearInterval(this.instanceInterval);
                    this.flicker = '';
                }

                this.instanceInterval = setInterval(() => {
                    this.time -= 1;
                    if (this.time <= 3) {
                        this.flicker = this.activeColor;
                    }
                }, oneSecond);
            }
        }
    }
</script>