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
            this.$ssrContext.keywords = `求芯网，贴片电容，贴片电阻，晶振，库存推广，现货求购`
        }
    }
}
  
const clientTitleMixin = {
    mounted () {
        const title = getTitle(this)
        if (title) {
            document.title = `求芯网，贴片电容，贴片电阻，晶振，库存推广，现货求购`
        }
    }
}
  
export default process.env.VUE_ENV === 'server'
    ? serverTitleMixin
    : clientTitleMixin
    