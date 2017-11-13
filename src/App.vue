<template>
  <div class="flex times">
    <div class="w-third w-25-l br b--light-gray vh-100 overflow-y-scroll">
      <FontList />
     </div>
    <Controls :font="$route.params.id" class="flex-auto ph3">
      <Editor :theme="$route.query.theme" />
    </Controls>
  </div>
</template>

<script>
import FontList from './FontList.vue'
import Controls from './Controls.vue'
import Editor from './Editor.vue'

export default {
  components: {
    FontList,
    Controls,
    Editor
  }
}
</script>
