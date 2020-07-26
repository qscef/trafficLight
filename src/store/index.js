import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const zero = 0;
const negativeOne = -1;

export default new Vuex.Store({
    state: {
        trafficLightParam: [
            {color:'red', workTime: 10000},
            {color:'yellow', workTime: 3000},
            {color:'green', workTime: 15000},
        ],
        directionStep: 1,
        nextActiveWindow: null,
    },
    mutations: {
        setNextActiveWindow(state, activeColor) {
            const indexActiveColor = state.trafficLightParam.findIndex(trafficLightWindow => trafficLightWindow.color === activeColor);
            if ((indexActiveColor + state.directionStep === state.trafficLightParam.length) || (indexActiveColor + state.directionStep < zero)) {
                state.directionStep *= negativeOne;
            }
            state.nextActiveWindow = {
                color: state.trafficLightParam[indexActiveColor + state.directionStep].color,
                timeForReplace: state.trafficLightParam[indexActiveColor].workTime,
            };
        }
    },
})