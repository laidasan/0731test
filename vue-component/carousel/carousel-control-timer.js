const carouselControlTimer = {
    props: {
        total: {
            type: Number,
            required: true
        },
        active: {
            type: Number,
            required: true
        },
        islock: {
            type: Boolean,
            required: true
        },
        isStart: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            width: 0,
            index: 0
        }
    },
    template: 
    `
    <div class="carousel__control__timer">
        <ul class="carousel__control__timer-list" v-if="total">
            <li v-for="n in total" 
            :key="n + 'li'"
            @click="$emit('click',n - 1)" 
            :class="{active: !isStart ? false : active === n - 1}"
            ref="timerItem">
            <div class="bar"></div
            ></li>
        </ul>
    </div>
    `,
    methods: {
        setWidth(index) { 
            return `${index === this.active ? 'width:100%;' : ''}`
        }
    }
}

export default carouselControlTimer