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
        message1: 'Hello Vue!',
        message2: 'Hi Vue.',
        age: 20,
        message3: ''
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
var vm3 = new Vue({
    el: '#condition1',
    data: {
        ok: false
    }
})
// v-for块有对父作用域属性的完全访问权限
var list = new Vue({
    el: '#listRender',
    data: {
        parentMessage: 'Parent',
        items: [
            { message: 'Foo' },
            { message: 'Bar' }
        ]
    }
})
var on = new Vue({
    el: '#on',
    data: {
        counter: 0
    }
})
var method = new Vue({
    el: '#method',
    data: {
        name: 'Vue.js'
    },
    methods: {
        greet: function(event) {
            alert('Hello ' + this.name + '!')
            if (event) {
                alert(event.target.tagName)
            }
        }
    }
})
// method.greet()
new Vue({
    el: '#inline',
    methods: {
        say: function(message) {
            alert(message)
        },
        warn: function(message, event) {
            if (event) {
                event.preventDefault()
            }
            alert(message)
        }
    }
})
var inputs = new Vue({
    el: '#input1',
    data: {
        message: '',
        checked: false,
        checkedNames: [],
        picked: '',
        selected: '',
        selectedM: [],
        selectedVFor: 'A',
        options: [
            { text: 'One', value: 'A' },
            { text: 'Two', value: 'B' },
            { text: 'Three', value: 'C' }
        ],
        toggle: '',
        a: 'x',
        b: 'y',
        pickValue: '',
        selectedVBind: ''
    }
})
