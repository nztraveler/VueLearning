var vm = new Vue({
  el:'#example',
  data:{
    message:'Hello'
  },
  computed:{
    reversedMessage: function () {
      return this.message.split('').reverse().join('')
    }
  }
})

var vm2 = new Vue({
  el: '#example-3',
  data: {
    checkedNames: {123: 123}
  },
})

let vm3 = new Vue({
  el: '#example-4',
  data: {
    picked: {123: 123}
  }
})

new Vue({
  el: '#example-6',
  data: {
    selected: []
  }
})

new Vue({
  el: '#example-7',
  data: {
    message: ''
  }
})

// console.log(vm.reversedMessage) // => 'olleH'
// vm.message = 'Goodbye'
// console.log(vm.reversedMessage) // => 'eybdooG'