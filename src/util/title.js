function getTitle (vm) {
    const { title } = vm.$options
    if (title) {
        return typeof title === 'function'
        ? title.call(vm)
        : title
    }
}
  
const serverTitleMixin = {
    created () {
        const title = getTitle(this)
        if (title) {
            this.$ssrContext.title = `${title} - 求芯网 - 电子元器件产业服务平台`
        }
    }
}
  
const clientTitleMixin = {
    mounted () {
        const title = getTitle(this)
        if (title) {
            document.title = `${title} - 求芯网 - 电子元器件产业服务平台`
        }
    }
}
  
export default process.env.VUE_ENV === 'server'
    ? serverTitleMixin
    : clientTitleMixin
    