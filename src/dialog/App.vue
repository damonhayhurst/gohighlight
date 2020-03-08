<template>
  <div>
    <b-form-group
        id="input-group-1"
        label="Company name"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          type="text"
          required
          v-model="value"
        ></b-form-input>
      </b-form-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: ""
    }
  },
  methods: {
    setValue: function (newValue) {
      this.value = newValue
    }
  },
  mounted: function () {
    var parent = this
    chrome.runtime.sendMessage({from:"dialog", listen:"true"})
    chrome.runtime.onMessage.addListener(function(msg) {
      parent.setValue(msg.text)
    })
  }
}
</script>

<style lang="scss" scoped>
p {
  font-size: 20px;
}
div {

}
</style>
