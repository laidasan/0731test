// import carouselControlPoints from './carousel-control-points'
import carouselControlArrow from './carousel-control-arrow'
import carouselControlTimer from './carousel-control-timer'

const carouselControl = {
    props: {
        total: {
            type: Number,
            default: 0
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
    components: {
        carouselControlArrow,
        carouselControlTimer,
    },
    template: 
    `
    <div class="carousel__control">

        <carousel-control-arrow class="next" 
        direct="next" 
        @next="$emit('next')" @mouseenter="$emit('mousehover')""
        ></carousel-control-arrow>

        <carousel-control-arrow class="prev" 
        direct="prev" 
        @prev="$emit('prev')" @mouseenter="$emit('mousehover')""
        ></carousel-control-arrow>

        <carousel-control-timer
        :total="total"
        :active="active"
        :islock="islock"
        :isStart="isStart"
        @click="click"
        ></carousel-control-timer>
    </div>
    `,
    methods: {
        click(val) {this.$emit('click',val)}
    }
}


export default carouselControl