<script>
import { mapActions, mapGetters } from 'vuex';
import VSidebarConversationListItem from './VSidebarConversationListItem';

export default {
  name: 'VUserListSidebar',
  components: { VSidebarConversationListItem },
  data() {
    return {
      searchedUser: '',
    };
  },
  async created() {
    this.getUserList();
  },
  computed: {
    ...mapGetters({
      users: 'users/list',
      currentUser: 'auth/user',
      getUsers: 'users/find',
    }),
    allUsers() {
      const { data } = this.getUsers({
        query: {
          _id: {
            // eslint-disable-next-line no-underscore-dangle
            $ne: this.currentUser._id.toString(),
          },
        },
      });

      return data;
    },
    filteredUserList() {
      const searchedValueLowerCase = this.searchedUser.toLowerCase();

      return this.allUsers
        .filter((item) => {
          const fullName = `${item.name} ${item.surname}`.toLocaleLowerCase();

          return fullName.includes(searchedValueLowerCase);
        });
    },
    users() {
      return this.searchedUser ? this.filteredUserList : this.allUsers;
    },
    defaultAvatar() {
      return 'https://cdn.vuetifyjs.com/images/lists/1.jpg';
    },
  },
  methods: {
    ...mapActions({
      setActiveSidebar: 'ui/setActiveSidebar',
      setActiveConversation: 'ui/setActiveConversation',
      fetchUserList: 'users/find',
    }),
    async returnConversationList() {
      this.setActiveSidebar('conversationList');
    },
    getUserList() {
      this.fetchUserList({
        query: {
          _id: {
            // eslint-disable-next-line no-underscore-dangle
            $ne: this.currentUser._id.toString(),
          },
        },
      });
    },
    getUserAvatar(user) {
      return user.avatar || this.defaultAvatar;
    },
    getFullName(user) {
      const { name = '', surname = '' } = user;

      return `${name} ${surname}`;
    },
    openConversation(user) {
      this.setActiveConversation({
        isGroup: false,
        name: null,
        users: [this.currentUser, user],
        unreadMessageCounts: {
          [this.currentUser._id]: 0,
          [user._id]: 0,
        },
      });
      this.returnConversationList();
    },
  },
};
</script>

<template>
  <v-row no-gutters class="v-user-list-sidebar flex-column flex-nowrap">
    <div class="v-user-list-sidebar__header flex flex-shrink-1">
      <v-toolbar flat dark color="primary">
        <v-btn
          icon
          @click="returnConversationList"
        >
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>

        <h3>New Conversation</h3>
      </v-toolbar>

      <v-toolbar color="secondary" flat>
        <v-text-field
          v-model="searchedUser"
          dense solo hide-details clearable
          placeholder="Search" label="search" append-icon="mdi-magnify"
        />
      </v-toolbar>
    </div>

    <v-list class="v-user-list-sidebar__list flex">
      <VSidebarConversationListItem
        v-for="user in users" :key="user._id"
        active type="new"
        :avatar="getUserAvatar(user)"
        :fullName="getFullName(user)"
        :online="user.isOnline"
        @click="openConversation(user)"
      />
    </v-list>
  </v-row>
</template>

<style lang="scss" scoped>
.v-user-list-sidebar {
  width: 380px;
  max-height: 100vh;

  &__list {
    overflow-y: auto;
  }
}
</style>
