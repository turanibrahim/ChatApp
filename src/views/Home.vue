<script>
import VChatSidebar from '../components/VSidebarContainer';

export default {
  name: 'Home',
  components: { VChatSidebar },
};
</script>

<template>
  <v-container fluid class="home-page fill-height pa-0">
    <v-row class="fill-height no-gutters">
      <v-col cols="auto">
        <VChatSidebar />
      </v-col>
      <v-col cols="grow" class="red">
        <v-row class="no-gutters">
          dasdsa
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
