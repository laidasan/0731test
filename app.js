import carousel from './vue-component/carousel/carousel'


let map = {
    // mobile: [
    //   {
    //     id: 0,
    //     src:
    //       "https://bnetcmsus-a.akamaihd.net/cms/gallery/VJMKYP67HDV81594666749129.jpg"
    //   },
    //   {
    //     id: 1,
    //     src:
    //       "https://bnetcmsus-a.akamaihd.net/cms/gallery/VMQWGZUUN0ND1595027718598.jpg"
    //   },
    //   {
    //     id: 2,
    //     src:
    //       "https://bnetcmsus-a.akamaihd.net/cms/gallery/6E7417V4COZK1594246631162.jpg"
    //   },
    // ],
    desk: [
      {
        id: 4,
        src:
          "https://bnetcmsus-a.akamaihd.net/cms/gallery/W4V3UJZQY33J1594666746765.jpg"
      },
      {
        id: 5,
        src:
          "https://bnetcmsus-a.akamaihd.net/cms/gallery/89QEFESOZFON1595027721142.jpg"
      },
      {
        id: 6,
        src:
          "https://bnetcmsus-a.akamaihd.net/cms/gallery/LBSED612PBHV1594664939349.jpg"
      }
    ]
  }

let data = {
    // bannerDeskBks: null,
    // bannerMobileBks: null,
    bannerDestBks: map.desk
}




new Vue({
    el: '#app',
    data,
    components: {
        carousel
    },
    methods: {
        toggleMenu() { this.activeMenu = !this.activeMenu },
        goPage(index) { this.nowPath = index },
        carouselGo() { this.$children.forEach((com) => com.go()) }
    }
})