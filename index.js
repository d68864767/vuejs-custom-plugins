```javascript
// Import Vue if not globally imported
const Vue = require('vue');

// Define your plugin
const VueCustomPlugin = {
  install(Vue, options) {
    // Add or modify global methods or properties
    Vue.myGlobalMethod = function () {
      // some logic...
    }

    // Add a global asset (directive/component)
    Vue.directive('my-directive', {
      bind (el, binding, vnode, oldVnode) {
        // some logic...
      }
    })

    // Inject some component options
    Vue.mixin({
      created: function () {
        // some logic...
      }
    })

    // Add an instance method
    Vue.prototype.$myMethod = function (methodOptions) {
      // some logic...
    }
  }
};

// Automatic installation if Vue has been added to the global scope
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueCustomPlugin);
}

// To allow use as module (npm/webpack/etc.) export component
module.exports = VueCustomPlugin;
```
