<template>
  <b-button :pressed.sync="capture" variant="primary">Capture</b-button>
</template>

<script>
export default {
  data () {
    return {
      capture: false
    }
  },
  watch: {
    capture: function (value) {
      if (value) {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          var port = chrome.tabs.sendMessage(tabs[0].id, {
            capture: true
          })
          port.onMessage.addListener(function(msg) {
            console.log("message recieved" + msg);
          });
        })
      }
    }
  },
}
</script>

<style lang="scss" scoped>
p {
  font-size: 20px;
}
</style>
