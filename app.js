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
    bannerDestBks: map.desk,
    isActiveMenu: false,
    headerList: [
      {id: 0 , txt: "A" , moveTo:"A"},
      {id: 1 , txt: "B" , moveTo:"B"},
      {id: 2 , txt: "C" , moveTo:"C"},
      {id: 3 , txt: "D" , moveTo:"D"},
    ]
}


Vue.component('headerLi',{
  props: {
    target: {
      type: String,
      default: ''
    },
    txt: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
    }
  },
  template: 
  `<li class="header__menu-list__item-f1">
    <a href="javascript:;">{{txt}}</a>
  </li>
  `
})

let vm = new Vue({
    el: '#app',
    data,
    components: {
        carousel
    },
    methods: {
        toggleMenu() { this.isActiveMenu = !this.isActiveMenu },
        goTarget(e) {
          let target = this.$refs[e.target.moveTo]
          let move = target.offsetTop - 150
          window.scrollTo({
            top: move,
            behavior: "smooth"
          })
          },
    }
})



const $headerMenuList = document.querySelector('.header__menu-list')
console.log($headerMenuList)

function createListItem(data) {
  if(!(data instanceof Array)) { 
    console.error('need array list type data')
    return 
  }

  data.forEach(item => {
    let li = document.createElement('li')
    let a = document.createElement('a')
    a.href="javascript:;"
    li.className = "header__menu-list__item-f1"
    a.textContent = item.txt
    li.moveTo = item.moveTo
    a.moveTo = item.moveTo
    li.append(a)
    $headerMenuList.append(li)
  })
}

createListItem(data.headerList)

