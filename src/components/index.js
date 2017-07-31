import Vue from 'vue'

function registerAllComponents (require) {
  require.keys().forEach(comp => {
    const vueComp = require(comp)
    const compName = vueComp.name ? vueComp.name.toLowerCase() : /\/([\w-]+)\.vue$/.exec(comp)[1]
    Vue.component(compName, vueComp)
  })
}

registerAllComponents(require.context('./', true, /\.vue$/))
