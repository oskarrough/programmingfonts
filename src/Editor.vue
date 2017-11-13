<template>
  <textarea>
// Demo code (the actual new parser character stream implementation)
// "'oO0 iIlL1 g9qCGQ ~-+=>

function StringStream(string) {
  this.pos = 0;
  this.string = string;
}

StringStream.prototype = {
  done: function() {
    return this.pos >= this.string.length;
  },
  next: function() {
    if (this.pos < this.string.length) return this.string.charAt(this.pos++);
  },
  eat: function(match) {
    var ch = this.string.charAt(this.pos);
    if (typeof match == 'string') var ok = ch == match;
    else var ok = ch && match.test ? match.test(ch) : match(ch);
    if (ok) {
      this.pos++;
      return ch;
    }
  },
  eatWhile: function(match) {
    var start = this.pos;
    while (this.eat(match));
    if (this.pos > start) return this.string.slice(start, this.pos);
  },
  eatSpace: function() {
    var start = this.pos;
    while (/\s/.test(this.string.charAt(this.pos))) this.pos++;
    return this.pos - start;
  },
  match: function(pattern, consume, caseInsensitive) {
    if (typeof pattern == 'string') {
      if (cased(this.string).indexOf(cased(pattern), this.pos) == this.pos) {
        if (consume !== false) this.pos += str.length;
        return true;
      }
    } else {
      var match = this.string.slice(this.pos).match(pattern);
      if (match && consume !== false) this.pos += match[0].length;
      return match;
    }
  }
};</textarea>
</template>

<script>
import CodeMirror from 'codemirror'
import 'codemirror/addon/edit/matchbrackets'
import 'codemirror/addon/selection/active-line'
import 'codemirror/mode/javascript/javascript'
// import 'codemirror/mode/go/go'

export default {
  props: {
    theme: String
  },
  watch: {
    theme(theme) {
      if (!theme) return
      this.editor.setOption('theme', theme)
    }
  },
	mounted() {
		this.editor = CodeMirror.fromTextArea(this.$el, {
      lineNumbers: true,
      mode: 'javascript',
      styleActiveLine: true,
      viewportMargin: Infinity,
			matchBrackets: true,
      lineWrapping: true,
      theme: this.theme || 'default'
    })
	}
}
</script>

<style src="codemirror/lib/codemirror.css"></style>
<style>
.CodeMirror {
  font-family: inherit;
  border: 1px solid;
  height: auto;
  height: calc(100vh - 6rem);
}
</style>
<style src="codemirror/theme/ambiance.css"></style>
<style src="codemirror/theme/base16-dark.css"></style>
<style src="codemirror/theme/base16-light.css"></style>
<style src="codemirror/theme/dracula.css"></style>
<style src="codemirror/theme/duotone-dark.css"></style>
<style src="codemirror/theme/duotone-light.css"></style>
<style src="codemirror/theme/eclipse.css"></style>
<style src="codemirror/theme/elegant.css"></style>
<style src="codemirror/theme/liquibyte.css"></style>
<style src="codemirror/theme/mdn-like.css"></style>
<style src="codemirror/theme/monokai.css"></style>
<style src="codemirror/theme/neat.css"></style>
<style src="codemirror/theme/neo.css"></style>
<style src="codemirror/theme/panda-syntax.css"></style>
<style src="codemirror/theme/paraiso-dark.css"></style>
<style src="codemirror/theme/paraiso-light.css"></style>
<style src="codemirror/theme/pastel-on-dark.css"></style>
<style src="codemirror/theme/railscasts.css"></style>
<style src="codemirror/theme/seti.css"></style>
<style src="codemirror/theme/solarized.css"></style>
<style src="codemirror/theme/the-matrix.css"></style>
<style src="codemirror/theme/tomorrow-night-bright.css"></style>
<style src="codemirror/theme/tomorrow-night-eighties.css"></style>
<style src="codemirror/theme/ttcn.css"></style>
<style src="codemirror/theme/twilight.css"></style>
<style src="codemirror/theme/vibrant-ink.css"></style>
<style src="codemirror/theme/xq-light.css"></style>
