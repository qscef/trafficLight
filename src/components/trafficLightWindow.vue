<template>
    <div class="traffic-light-window" v-bind:style="{'background-color': color}" :class="[{active: activeColor === color}, {flicker: flicker === color}]">
        <span v-if="activeColor === color">
            {{time}}
        </span>
    </div>
</template>

<script>
    export default  {
        name: 'traffic-light-window',
        props: ['color', 'activeColor', 'time', 'flicker'],
    }
</script>

<style lang="scss">
    .traffic-light-window {
        width: 100px;
        height: 100px;
        opacity: 0.5;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .active {
        opacity: 1;
    }
    span {
        font-size: 30px;
    }
    .flicker {
        -webkit-animation: fadeInFromNone 0.5s infinite;
        -moz-animation: fadeInFromNone 0.5s infinite;
        -o-animation: fadeInFromNone 0.5s infinite;
        animation: fadeInFromNone 0.5s infinite;
}

@-webkit-keyframes fadeInFromNone {
    0% {
        display: none;
        opacity: 0;
    }

    1% {
        display: block;
        opacity: 0;
    }

    100% {
        display: block;
        opacity: 1;
    }
}

@-moz-keyframes fadeInFromNone {
    0% {
        display: none;
        opacity: 0;
    }

    1% {
        display: block;
        opacity: 0;
    }

    100% {
        display: block;
        opacity: 1;
    }
}

@-o-keyframes fadeInFromNone {
    0% {
        display: none;
        opacity: 0;
    }

    1% {
        display: block;
        opacity: 0;
    }

    100% {
        display: block;
        opacity: 1;
    }
}

@keyframes fadeInFromNone {
    0% {
        display: none;
        opacity: 0;
    }

    1% {
        display: block;
        opacity: 0;
    }

    100% {
        display: block;
        opacity: 1;
    }
}
</style>