<template>
  <div>
    <menu class="pl0 flex items-center">
        <label class="mr4">font
          <input readonly disabled v-model="font">
        </label>
        <label class="mr4">size
          <input type="number" v-model="fontSize" @input="pushQuery('fontSize')" class="w3">
        </label>
        <label class="mr4">line-height
          <input type="number" step="0.1" v-model="lineHeight" @input="pushQuery('lineHeight')" class="w3">
        </label>
        <label class="mr4">anti-aliased
          <input type="checkbox" v-model="antiAliased" @change="pushQuery('antiAliased')">
        </label>
        <label>theme 
          <select v-model="theme" @change="pushQuery('theme')">
            <option>default</option>
            <option>ambiance</option>
            <option>base16-dark</option>
            <option>base16-light</option>
            <option>dracula</option>
            <option>duotone-dark</option>
            <option>duotone-light</option>
            <option>liquibyte</option>
            <option>mdn-like</option>
            <option>monokai</option>
            <option>neat</option>
            <option>neo</option>
            <option>night</option>
            <option>panda-syntax</option>
            <option>paraiso-dark</option>
            <option>paraiso-light</option>
            <option>pastel-on-dark</option>
            <option>railscasts</option>
            <option>seti</option>
            <option>solarized dark</option>
            <option>solarized light</option>
            <option>the-matrix</option>
            <option>tomorrow-night-bright</option>
            <option>tomorrow-night-eighties</option>
            <option>ttcn</option>
            <option>twilight</option>
            <option>vibrant-ink</option>
            <option>xq-light</option>
          </select>
        </label>
    </menu>
    <div :style="{
			'font-family': fontFamily,
			fontSize: fontSize+'px',
			lineHeight: lineHeight,
			fontSmoothing }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    font: String
  },
  data() {
    const q = this.$route.query
    return {
      theme: q.theme || 'default',
      fontSize: q.fontSize || '13',
      lineHeight: q.lineHeight || '1.5',
      antiAliased: q.antiAliased || false
    }
  },
  computed: {
    fontFamily() {
      return `${this.font} !important`
    },
    fontSmoothing() {
      return this.antiAliased ? 'antialiased' : 'auto'
    }
  },
  methods: {
    pushQuery(prop) {
      const query = { ...this.$route.query }
      query[prop] = this[prop]
      this.$router.push({ query })
    }
  }
}
</script>
