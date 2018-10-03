<template>
<div>
  {{ internalValue }}
</div>
</template>

<script>
export default {
  name: 'DecoderText',
  props: {
    value: {
      type: String,
      default: ''
    },
    target: {
      type: String,
      default: ''
    },
    fps: {
      type: Number,
      default: 24
    },
    steps: {
      type: Number,
      default: 3
    },
    resetWord: {
      type: Boolean,
      default: true
    }
  },
  data: _ => ({
    cachedValue: '',
    internalValue: '',
    running: false
  }),
  created() {
    this.internalValue = this.value
  },
  methods: {
    randChar(type) {
      let rand = str => str.split('')[Math.floor(Math.random() * str.length)]

      switch(type) {
        case 'space':
          return ' '
        case 'number':
          return rand("0123456789")
        case 'lower':
          return rand("abcdefghijklmnopqrstuvwxyz")
        case 'upper':
          return rand("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
        case 'symbol':
        default:
          return rand(",.?/\\(^)![]{}*&^%$#'\"")
      }
    },
    startJumble(original) {
      this.running = true
      let types = original.split('').map(l => {
        if  (l == ' ') {
          return 'space'
        } else if(/[0-9]/.test(l)){
          return "number";
        } else if(/[a-z]/.test(l)){
          return "lower";
        }else if(/[A-Z]/.test(l)){
          return "upper";
        } else {
          return "symbol";
        }
      })

      let nextVal = this.resetWord ? '' : this.internalValue.substr(0, original.length)

      this.$emit('input', nextVal)
      this.internalValue = nextVal

      this.jumble(original, nextVal, types, -this.steps + 1)
    },
    jumble(orig, filler, types, index = 0) {
      if (index > orig.length) {
        this.running = false;
        return;
      }

      let tmp = orig.slice(0, Math.max(index, 0)) + filler.slice(Math.max(index, 0))
      let arr = tmp.split('')

      for(let i = Math.max(index, 0); i < Math.min(index + this.steps, orig.length); ++i) {
        arr[i] = this.randChar(types[i])
      }
      this.internalValue = arr.join('')
      this.$emit('input', this.internalValue)
      if (this.cachedValue === orig) {
        setTimeout(_ => {
          this.jumble(orig, filler, types, index + 1);
        }, 1000 / this.fps);
      } else {
        this.running = false
      }
    }
  },
  watch: {
    target(newTarget) {
      this.cachedValue = newTarget
      this.startJumble(newTarget)
    }
  }
}
</script>

