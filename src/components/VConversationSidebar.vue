<script>
import VSidebarConversationListItem from './VSidebarConversationListItem';

export default {
  name: 'VConversationSidebar',
  components: { VSidebarConversationListItem },
  data() {
    return {
      test: '1',
    };
  },
};
</script>

<template>
  <v-row no-gutters class="v-conversation-sidebar flex-column flex-nowrap">
    <div class="v-conversation-sidebar__header flex flex-shrink-1">
      <v-toolbar flat color="primary">
        <v-avatar size="40">
          <img
            src="https://pbs.twimg.com/profile_images/1354745782394564616/iTIzzheJ_400x400.jpg"
            alt="İbrahim Turan"
          >
        </v-avatar>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-message</v-icon>
        </v-btn>

        <v-menu offset-y rounded>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item>
              <v-list-item-title>New group</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>Profile</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>Settings</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>Exit</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar>

      <v-toolbar>
        <v-text-field
          dense rounded solo hide-details
          placeholder="Search" label="search" append-icon="mdi-magnify"
        />
      </v-toolbar>
    </div>

    <v-list class="v-conversation-sidebar__list flex">
      <VSidebarConversationListItem
        active
        v-for="number in 21"
        :key="number"
        avatar="https://cdn.vuetifyjs.com/images/lists/1.jpg"
        fullName="İbrahim Turan"
        message="yok ya Mesaj mesaj mesaj mesaj Mesaj mesaj mesaj mesaj "
      />
    </v-list>
  </v-row>
</template>

<style lang="scss" scoped>
.v-conversation-sidebar {
  width: 380px;
  max-height: 100vh;

  &__list {
    overflow-y: auto;
  }
}
</style>
