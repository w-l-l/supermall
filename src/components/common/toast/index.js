import Toast from './Toast'

const plugin = {}

// 删除元素
function removeDOM(event) {
  event.target.parentNode && event.target.parentNode.removeChild(event.target)
}

plugin.install = Vue => {
  const ToastConstructor = Vue.extend(Toast)
  
  // 注意：这里不要使用箭头函数
  ToastConstructor.prototype.close = function() {
    this.isShow = false
    this.$el.addEventListener('transitionend', removeDOM)
  }

  Vue.prototype.$toast = (options = {}) => {
    // 将创建出来的组件挂载到某个div中
    const toast = new ToastConstructor()
    toast.$mount(document.createElement('div'))

    // 将toast的$el添加到body中
    document.body.appendChild(toast.$el)

    // 获取参数
    let { duration, message } = options
    duration = duration || 2500
    toast.message = message || '我是弹窗'
    toast.isShow = true

    // 延迟duration让toast消失
    setTimeout(() => toast.close(), duration)
  }
}

export default plugin
