<script>
export default {
  name: 'Auth',
};
</script>

<template>
  <v-container fluid class="fill-height grey darken-3">
    <v-row class="fill-height" justify="center" align="center">
      <v-col cols="10">
        <v-card
          elevation="22"
        >
          <v-row no-gutters>
            <v-col cols="8">
              <v-img
                src="https://images.unsplash.com/photo-1543269865-4430f94492b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                height="100%"
                width="100%"
              />
            </v-col>

            <v-col cols="4">
              <router-view />
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
