<template>
  <div>
    <ul style="list-style-type: none">
      <li v-for="field in fields" :key="field.name">
    <b-form-group
        id="input-group-1"
        :label="field.name"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          type="text"
          required 
          v-model="field.value"
        ></b-form-input>
      </b-form-group>
    </li>
  </ul>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fields: [
        {name: "Company Name", value: ""},
        {name: "Email", value: ""},
        {name: "Phone", value: ""}
      ],
      currentValue: "",
      fieldIndex: 0 
    }
  },
  methods: {
    setCurrentValue: function (newCurrentValue) {
      this.currentValue = newCurrentValue
    }
  },
  watch: {
    currentValue: function (newValue, oldValue) {
      this.fields[this.fieldIndex].value = newValue
      if (this.fieldIndex < this.fields.length ){
        this.fieldIndex++
      } else {
        this.fieldIndex = 0 
      }
    }
  },
  mounted: function () {
    var parent = this
    chrome.runtime.sendMessage({from:"dialog", listen:"true"})
    chrome.runtime.onMessage.addListener(function(msg) {
      parent.setCurrentValue(msg.text)
    })
  }
}
</script>

<style lang="scss" scoped>
p {
  font-size: 20px;
}
</style>
