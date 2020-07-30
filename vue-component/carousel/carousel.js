import carouselItem from './carousel-item'
import carouselControl from './carousel-control'


let intervalTime = 6000;
const carousel = {
    props: {
        deskBks: {
            type: Array,
            default: null
        },
        mobileBks: {
            type: Array,
            default: null
        },
    },
    data() {
        return {
            active: 0,
            default: 'desk',
            direct: 0,
            isHover: false,
            timeout: null,
            transType: 'move',
            islock: true,
            isStart: false,
            lockTimer: null
        }
    },
    components: {
        carouselItem,
        carouselControl
    },
    mounted() {
        this.start()
    },
    beforeDestory() {
        this.stopTimer()
    },
    template: 
    `
    <div class="carousel" @mouseenter="mouseHover" @mouseleave="mouseLeave">
        <div class="carousel-container">

        
            <transition-group tag="div" class="carousel-pane">
                <carousel-item 
                v-for="n in total" 
                :key="n + 'a'"
                :srcMobile="getMobileSrc(n - 1)"
                :srcDesk="getDeskSrc(n - 1)"
                v-show="active === n - 1"
                :index="n - 1"
                :active="active"
                :direct="direct"
                :total="total"
                ></carousel-item>
            </transition-group>
            

            <carousel-control
            :total="total"
            :active="active"
            :islock="islock"
            :isStart="getStart"
            @click="changeItem"
            @next="nextHandler"
            @prev="prevHandler"
            @moushover="mouseHover"
            ></carousel-control> 
        </div>
    </div>
    `,
    computed: {
        trans() {
            let type = this.transType || 'move'
            return this.direct ? `${type}-left` : `${type}-right`
        },
        getStart() { return this.isStart },
        getList() { return this[`${this.default}Bks`]},

        getTotal() {
            if(!this.deskBks && !this.mobileBks) { return 1 }

            return this.getList.length
        },
        total() { return this.getTotal },
    },
    methods: {
        start() { 
            this.setTimer()
            this.isStart = true
            this.islock = false
         },
        getMobileSrc(index) { 
            return this.mobileBks ? this.mobileBks[index].src : ''},
        getDeskSrc(index) { return this.deskBks ? this.deskBks[index].src : ''},
        setTimer() {
            clearInterval(this.timeout)
            this.timeout = setInterval(() => {
                this.go()
            },intervalTime)
        },
        stopTimer() { clearInterval(this.timeout) },
        lock() {
            this.islock = true

            clearTimeout(this.lockTimer)
            this.lockTimer = setTimeout(() => {
                this.islock = false
                this.lockTimer = null
            },1000)
        },
        mouseHover() { this.isHover = true },
        mouseLeave() { this.isHover = false },
        
        changeItem(val) {
            if(this.islock) { return }
            this.direct = this.active < val ? 1 : 0
            this.active = (val + this.total) % this.total
            this.lock()
            },
        nextHandler() {
            if(this.islock) { return }

            this.direct = 1
            this.changeItem(this.active + 1)
        },
        prevHandler() {
            if(this.islock) { return }

            this.direct = 0
            this.changeItem(this.active - 1)
        },
        go() { 
            this.isHover && !this.islock ? '' : this.nextHandler() 
        }
    },
    watch: {
        deskBks(val) { 
            val || !val.length === 0 ? this.start() :  ''
        }
    }
}

export default carousel



