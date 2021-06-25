<script>
export default {
  name: 'VSidebarConversationListItem',
  props: {
    type: {
      type: String,
      default: 'new',
      validator: (v) => ['new', 'exist'].includes(v),
    },
    conversationId: { type: [Number, String], default: null },
    userId: { type: [Number, String], default: null },
    fullName: { type: String, default: '' },
    message: { type: String, default: '' },
    messageCount: { type: String, default: '' },
    avatar: { type: String, default: '' },
    active: { type: Boolean, default: false },
    selectable: { type: Boolean, default: false },
  },
  computed: {
    hasNewMessages() {
      return Number(this.messageCount);
    },
    isNewConversation() {
      return this.type === 'new';
    },
  },
  methods: {
    openConversation() {
      this.$emit('click', {
        conversationId: this.conversationId,
        userId: this.userId,
      });
    },
  },
};
</script>

<template>
  <div>
    <v-list-item @click="openConversation">
      <v-list-item-avatar>
        <v-img :src="avatar"></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>
          <template v-if="hasNewMessages">
            <v-badge inline :content="messageCount" class="mt-0 text-subtitle-2">
              {{ fullName }}
            </v-badge>
          </template>

          <template v-else>
            <span class="text-subtitle-2">
              {{ fullName }}
            </span>
          </template>
        </v-list-item-title>

        <v-list-item-subtitle v-if="!isNewConversation"> {{ message }} </v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-action v-if="selectable">
        <v-simple-checkbox :ripple="false" :value="active"></v-simple-checkbox>
      </v-list-item-action>

    </v-list-item>

    <v-divider/>
  </div>
</template>
