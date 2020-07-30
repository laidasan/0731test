const carouselItem = {
    props: {
        srcMobile: {
            type: String,
            default: ''
        },
        srcDesk: {
            type: String,
            default: ''
        },
        baseColor: {
            type: String,
            default: '#000'
        },
        active: {
            type: Number,
            required: true
        },
        index: {
            type: Number,
            required: true
        },
        direct: {
            type: Number,
            required: true
        },
        total: {
            type: Number,
            required: true
        },
    },
    template: 
    `
    <div class="carousel__item">
        <div class="carousel__item__bk-container" :style="getBkColor" :class="slideAni">
            <div class="carousel__item__bk mobile" :style="getMobile" :key="getMobile + 'mobile'" v-if="srcMobile"></div>
            <div class="carousel__item__bk desk" :key="getDesk + 'desk'" :style="getDesk" v-if="srcDesk"></div>
        </div>
        <div class="carousel__item__content>
            <div class="carousel__item__content-group">
            </div>
        </div>
    </div>
    `,
    computed: {
        getMobile() { return `background-image: url('${this.srcMobile}')` },
        getDesk() { return `background-image: url('${this.srcDesk}')` },
        getBkColor() { return `background-color: ${this.baseColor}` },
        slideAni() {
            let result = ''
            let prev = this.direct ? -1 : 1
            let prevActice = (this.active + prev + this.total) % this.total
            this.index === this.active ? this.direct ? result = "next-in" : result = "prev-in" : ''
            this.index === prevActice ? result = 'prev-out' : ''
            return result
        },
    },
}

export default carouselItem