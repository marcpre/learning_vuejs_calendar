import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import moment from 'moment-timezone';
moment.tz.setDefault('UTC');

export default new Vuex.Store({
    state: {
        currentYear: 2018,
        currentMonth: 5,
        eventFormPosX: 0,
        eventFormPosY: 0,
        eventFormActive: false,
        events: [
            { description: 'Random event', date: moment('2018-05-29', 'YYYY-MM-DD') },
            { description: 'Random event', date: moment('2017-02-29', 'YYYY-MM-DD') },
            { description: 'Random event', date: moment('2018-04-29', 'YYYY-MM-DD') }
        ],
        eventFormDate: null,
    },
    mutations: {
        setCurrentMonth(state, payload) {
            state.currentMonth = payload;
        },
        setCurrentYear(state, payload) {
            state.currentYear = payload;
        },
        eventFormPos(state, payload) {
            state.eventFormPosX = payload.x;
            state.eventFormPosY = payload.y;
        },
        eventFormActive(state, payload) {
            state.eventFormActive = payload;
        },
        addEvent(state, payload) {
            state.events.push({
                description: payload,
                date: state.eventFormDate
            })
        },
        eventFormDate(state, payload) {
            state.eventFormDate = payload;
        },
    }
});
