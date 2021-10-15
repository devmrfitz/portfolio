import Vue from 'vue'

// <div v-hover-animation="{ duration: 1000, apply: 'single-class' }">
//     Sample Usage
// </div>

const DIRECTIVE_CLASS = 'hover__animation__directive'

Vue.directive('hover-animation', {
  inserted: (el, bindings) => {
    let apply = bindings.value.apply
    const duration = bindings.value.duration
    if (typeof apply === 'string') apply = apply.split(' ')
    if (typeof apply !== 'object')
      throw new Error(
        'hover-animation-directive: `apply` must be a string or an array'
      )
    else if (typeof duration !== 'number')
      throw new Error('hover-animation-directive: `duration` must be a number')

    el.addEventListener('mouseover', () => {
      if (!el.classList.contains(DIRECTIVE_CLASS)) {
        el.classList.add(...apply, DIRECTIVE_CLASS)
        setTimeout(() => {
          el.classList.remove(...apply, DIRECTIVE_CLASS)
        }, duration)
      }
    })
  },
})
