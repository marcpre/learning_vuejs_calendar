<template>
    <div :class="day">{{ day.format('D') }}</div>
</template>
<script>
    export default {
        props: ['day'],
        comuted: {
            classObject() {
                return {
                    day: true,
                    today: this.day.isSame(this.$moment(), 'day')
                }
            }
        }
    }
</script>
