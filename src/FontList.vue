<template>
	<ul class="list mv0 ph0">
		<li class="" v-for="font in fonts" :key="font.alias">
			<router-link :to="'/'+font.alias" class="db pt2 pb1 ph3 black no-underline">
			<!-- <a :href="'#/' + font.alias" class="db pt2 pb1 ph3 black no-underline"> -->
				<u class="">{{font.name}}</u><br>
				<span class="f6">
					{{font.author}} / {{font.year}} —
				<a :href="font.website" rel="external" class="black">info</a>
				</span>
			<!-- </a> -->
			</router-link>
		</li>
	</ul>
</template>

<script>
export default {
  data() {
    return {
      fonts: Array
    }
  },
  async created() {
    const res = await fetch('fonts.json')
    const fonts = await res.json()
    this.fonts = fonts
  }
}
</script>

<style scoped>
.router-link-active u {
  color: red;
}
</style>
