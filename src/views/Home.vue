<script>
import VSidebarContainer from '../components/VSidebarContainer';
import VConversationContainer from '../components/VConversationContainer';

export default {
  name: 'Home',
  components: { VSidebarContainer, VConversationContainer },
};
</script>

<template>
  <v-container fluid class="home-page fill-height pa-0">
    <v-row class="fill-height no-gutters">
      <v-col cols="auto">
        <VSidebarContainer />
      </v-col>

      <v-col cols="grow" class="white">
        <v-row class="no-gutters">
          <VConversationContainer />
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
