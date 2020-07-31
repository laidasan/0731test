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
    { id: 0, txt: "A", moveTo: "A" },
    { id: 1, txt: "B", moveTo: "B" },
    { id: 2, txt: "C", moveTo: "C" },
    { id: 3, txt: "D", moveTo: "D" },
  ]
}


Vue.component('headerLi', {
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
      let move = target.offsetTop - ((window.innerHeight - target.offsetHeight) / 2)
      window.scrollTo({
        top: move,
        behavior: "smooth"
      })
    },
  }
})



const $header = document.querySelector('.header')
const $banner = document.querySelector('.banner')
const $headerMenuList = document.querySelector('.header__menu-list')
const $firstSection = document.querySelector('.section:first-child')
let headerHeight = $header.offsetHeight
let firstSectionMarginTop = parseFloat(window.getComputedStyle($firstSection)['margin-top'].split('px')[0])
let bannerBottom = $banner.offsetTop + $banner.offsetHeight


function getSectionMt(el) {
  return parseFloat(window.getComputedStyle($firstSection)['margin-top'].split('px')[0])
}
function createListItem(data) {
  if (!(data instanceof Array)) {
    console.error('need array list type data')
    return
  }

  data.forEach(item => {
    let li = document.createElement('li')
    let a = document.createElement('a')
    a.href = "javascript:;"
    li.className = "header__menu-list__item-f1"
    a.textContent = item.txt
    li.moveTo = item.moveTo
    a.moveTo = item.moveTo
    li.append(a)
    $headerMenuList.append(li)
  })
}


function getLayer() {
  headerHeight = $header.offsetHeight


  $header.style.position === 'fixed' ?
    firstSectionMarginTop = getSectionMt($firstSection) - 60 :
    firstSectionMarginTop = getSectionMt($firstSection)

  bannerBottom = $banner.offsetTop + $banner.offsetHeight
}

function resizeHandler() {
  getLayer()
}

function fixedHeader() {
  let windowTop = window.scrollY

  if (windowTop >= bannerBottom && $header.style.position !== 'fixed') {
    $header.style.position = 'fixed'
    $header.style.top = 0
    $header.style.left = 0
    $header.style.right = 0
    $header.style['z-index'] = 3
    $firstSection.style['margin-top'] = `${headerHeight + firstSectionMarginTop}px`
  } else if (windowTop < bannerBottom) {
    $header.style.removeProperty('position')
    $firstSection.style.removeProperty('margin-top')
  }
}

function init() {
  createListItem(data.headerList)

  headerHeight = $header.offsetHeight
  firstSectionMarginTop = parseFloat(window.getComputedStyle($firstSection)['margin-top'].split('px')[0])
  bannerBottom = $banner.offsetTop + $banner.offsetHeight
}





window.onload = function () {
  resizeHandler()
  init()
  window.addEventListener('scroll', fixedHeader)
  window.addEventListener('resize', resizeHandler)
}

