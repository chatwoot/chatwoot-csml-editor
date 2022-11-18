<script>
export default {
  data() {
    return { csmlContent: "" };
  },
  mounted() {
    window.addEventListener("message", (event) => {
      if (!this.isJSONValid(event.data)) {
        return;
      }

      const eventData = JSON.parse(event.data);
      if (eventData.event === "editorContext") {
        this.csmlContent = eventData.data;
      }
    });
  },
  watch: {
    csmlContent() {
      window.parent.postMessage(
        "chatwoot-csml-editor:update" + this.csmlContent,
        "*"
      );
    },
  },
  methods: {
    isJSONValid(str) {
      try {
        JSON.parse(str);
      } catch (e) {
        return false;
      }
      return true;
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
