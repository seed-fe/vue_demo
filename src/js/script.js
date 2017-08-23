var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello World!'
    }
})
var app2 = new Vue({
    el: '#app-2',
    data: {
        message: '页面加载于 ' + new Date()
    }
})
var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})
var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: '学习 JavaScript' },
            { text: '学习 Vue' },
            { text: '整个牛项目' }
        ]
    }
})
var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
})
var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello Vue!'
    }
})
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{todo.text}}</li>'
})
var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: '蔬菜' },
            { id: 1, text: '奶酪' },
            { id: 2, text: '随便其他什么人吃的东西' }
        ]
    }
})
var vm = new Vue({
    el: '#example',
    data: {
        message: 'Hello'
    },
    computed: {
        reversedMessage: function() {
            // 每个 Vue 实例都会代理其 data 对象里所有的属性，所以这里的this.message就是data里的message
            return this.message.split('').reverse().join('')
        }
    }
})
var vm1 = new Vue({
    el: '#demo',
    data: {
        firstName: 'Foo',
        lastName: 'Bar'
    },
    computed: {
        fullName: {
            // getter
            get: function() {
                return this.firstName + ' ' + this.lastName
            },
            // setter
            set: function(newValue) {
                var names = newValue.split(' ')
                this.firstName = names[0]
                this.lastName = names[names.length - 1]
            }
        }
    }
})
var vm2 = new Vue({
    el: '#condition',
    data: {
        loginType: 'username'
    },
    methods: {
        toggleLoginType: function() {
            this.loginType = this.loginType === 'username' ? 'email' : 'username'
        }
    }
})