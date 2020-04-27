<template>
  <v-list-item
    link
    avatar
  >
    <template v-if="!isRoom">
      <v-list-item-avatar>
        <v-img src="https://cdn.vuetifyjs.com/images/lists/1.jpg"></v-img>
      </v-list-item-avatar>
    </template>
    <v-list-item-content >
      <v-list-item-title>
        <template v-if="!isRoom">
          <v-badge
            :color="(isOnline) ? 'green' : 'red'"
            :content="(isOnline)? 'Online': 'Offline'"
            class="font-weight-bold"
            v-if="username"
          >
            {{ (username) ? username : '' }}
          </v-badge>
        </template>
        <span class="font-weight-bold">{{ (name) ? name : '' }}</span>
      </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  props:{
    username: String,
    isOnline: Boolean,
    isRoom: Boolean,
    name: String,
  },
}
</script>

<style>

</style>