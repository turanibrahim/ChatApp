<script>
import {mapActions, mapGetters} from 'vuex';
import VConversationSidebar from './VConversationSidebar';

export default {
  name: 'VSidebarContainer',
  components: { VConversationSidebar },
  created() {
    this.setDefaultSidebar();
  },
  computed: {
    ...mapGetters({
      activeSidebar: 'ui/activeSidebar',
    }),
    sidebars() {
      return {
        conversationList: () => import('./VConversationSidebar'),
        userList: () => import('./VUserListSidebar'),
      };
    },
    getActiveSidebar() {
      return this.sidebars[this.activeSidebar];
    },
  },
  methods:{
    ...mapActions({
      setActiveSidebar: 'ui/setActiveSidebar',
    }),
    setDefaultSidebar() {
      this.setActiveSidebar('conversationList');
    },
  },
};
</script>

<template>
  <component :is="getActiveSidebar"/>
</template>
