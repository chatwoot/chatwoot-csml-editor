<script>
export default {
  data() {
    return { csmlContent: "" };
  },
  watch: {
    csmlContent() {
      window.parent.postMessage(
        "chatwoot-csml-editor:update" + this.csmlContent,
        "*"
      );
    },
  },
};
</script>

<template>
  <csml-monaco-editor v-model="csmlContent" class="csml-editor" />
</template>

<style scoped>
.csml-editor {
  height: 100%;
  width: 100%;
}
</style>
