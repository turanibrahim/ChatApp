<template>
  <v-list-item 
    link
    avatar
  >
    <v-list-item-avatar>
      <v-img src="https://cdn.vuetifyjs.com/images/lists/1.jpg"></v-img>
    </v-list-item-avatar>
    <v-list-item-content >
      <v-list-item-title>
        {{ name }}
      </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  props:{
    name: String,
  },
  methods:{
  }
}
</script>

<style>

</style>