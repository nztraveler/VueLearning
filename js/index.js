// var vm = new Vue({
//   el:'#example',
//   data:{
//     message:'Hello'
//   },
//   computed:{
//     reversedMessage: function () {
//       return this.message.split('').reverse().join('')
//     }
//   }
// })
//
// // var vm2 = new Vue({
// //   el: '#example-3',
// //   data: {
// //     checkedNames: {123: 123}
// //   },
// // })
//
// // let vm3 = new Vue({
// //   el: '#example-4',
// //   data: {
// //     picked: {123: 123}
// //   }
// // })
//
// new Vue({
//   el: '#example-6',
//   data: {
//     selected: []
//   }
// })
//
// new Vue({
//   el: '#example-7',
//   data: {
//     message: ''
//   }
// })
//
// new Vue({
//   el: '#list-complete-demo',
//   data: {
//     items: [1,2,3,4,5,6,7,8,9],
//     nextNum: 10
//   },
//   methods: {
//     randomIndex: function () {
//       return Math.floor(Math.random() * this.items.length)
//     },
//     add: function () {
//       this.items.splice(this.randomIndex(), 0, this.nextNum++)
//     },
//     remove: function () {
//       this.items.splice(this.randomIndex(), 1)
//     },
//     shuffle: function () {
//       this.items = _.shuffle(this.items)
//     }
//   }
// })
//
// new Vue({
//   el: '#dynamic-fade-demo',
//   data: {
//     show: true,
//     fadeInDuration: 1000,
//     fadeOutDuration: 1000,
//     maxFadeDuration: 1500,
//     stop: true
//   },
//   mounted: function () {
//     this.show = false
//   },
//   methods: {
//     beforeEnter: function (el) {
//       el.style.opacity = 0
//     },
//     enter: function (el, done) {
//       var vm = this
//       Velocity(el,
//         { opacity: 1 },
//         {
//           duration: this.fadeInDuration,
//           complete: function () {
//             done()
//             if (!vm.stop) vm.show = false
//           }
//         }
//       )
//     },
//     leave: function (el, done) {
//       var vm = this
//       Velocity(el,
//         { opacity: 0 },
//         {
//           duration: this.fadeOutDuration,
//           complete: function () {
//             done()
//             vm.show = true
//           }
//         }
//       )
//     }
//   }
// })

//
// const Home = { template: '<div><h1>Home</h1><router-view></router-view></div>' }
// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }
// const Baz = { template: '<div>baz</div>' }
//
// const router = new VueRouter({
//   mode: 'history',
//   // base: __dirname,
//   routes: [
//     { path: '/home', component: Home,
//       children: [
//         // absolute alias
//         { path: 'foo', component: Foo, alias: '/foo' },
//         // relative alias (alias to /home/bar-alias)
//         { path: 'bar', component: Bar, alias: 'bar-alias' },
//         // multiple aliases
//         { path: 'baz', component: Baz, alias: ['/baz', 'baz-alias'] }
//       ]
//     }
//   ]
// })
//
// new Vue({
//   router,
//   template: `
//     <div id="app">
//       <h1>Route Alias</h1>
//       <ul>
//         <li><router-link to="/foo">
//           /foo (renders /home/foo)
//         </router-link></li>
//         <li><router-link to="/home/bar-alias">
//           /home/bar-alias (renders /home/bar)
//         </router-link></li>
//         <li><router-link to="/baz">
//           /baz (renders /home/baz)</router-link>
//         </li>
//         <li><router-link to="/home/baz-alias">
//           /home/baz-alias (renders /home/baz)
//         </router-link></li>
//       </ul>
//       <router-view class="view"></router-view>
//     </div>
//   `
// }).$mount('#app')

// console.log(vm.reversedMessage) // => 'olleH'
// vm.message = 'Goodbye'
// console.log(vm.reversedMessage) // => 'eybdooG'

const Home = {template: '<div>home</div>'}
const Foo = {template: '<div>foo</div>'}
const Bar = {
  template: `
    <div>
      bar
      <div style="height:500px"></div>
      <p id="anchor">Anchor</p>
    </div>
  `
}

// scrollBehavior:
// - only available in html5 history mode
// - defaults to no scroll behavior
// - return false to prevent scroll
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    const position = {}
    // new navigation.
    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash
    }
    // check if any matched route config has meta that requires scrolling to top
    if (to.matched.some(m => m.meta.scrollToTop)) {
      // cords will be used if no selector is provided,
      // or if the selector didn't match any element.
      position.x = 0
      position.y = 0
    }
    // if the returned position is falsy or an empty object,
    // will retain current scroll position.
    return position
  }
}

const router = new VueRouter({
  mode: 'history',
  // base: __dirname,
  scrollBehavior,
  routes: [
    {path: '/', component: Home, meta: {scrollToTop: true}},
    {path: '/foo', component: Foo},
    {path: '/bar', component: Bar, meta: {scrollToTop: true}}
  ]
})

new Vue({
  router,
  template: `
    <div id="app">
      <h1>Scroll Behavior</h1>
      <ul>
        <li><router-link to="/">/</router-link></li>
        <li><router-link to="/foo">/foo</router-link></li>
        <li><router-link to="/bar">/bar</router-link></li>
        <li><router-link to="/bar#anchor">/bar#anchor</router-link></li>
      </ul>
      <router-view class="view"></router-view>
    </div>
  `
}).$mount('#app')
