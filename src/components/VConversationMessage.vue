<script>
export default {
  name: 'VConversationMessage',
  props: {
    message: {
      type: String,
      required: true,
    },
    time: {
      type: [Date, String],
      required: true,
    },
    direction: {
      type: String,
      required: true,
      validator: (v) => ['outgoing', 'incoming'].includes(v),
    },
  },
  computed: {
    isOutgoingMessage() {
      return this.direction === 'outgoing';
    },
    wrapperClass() {
      return this.isOutgoingMessage && 'end';
    },
  },
};
</script>

<template>
  <v-row :justify="wrapperClass" class="v-conversation-message mx-6 my-2">
    <v-col
      cols="auto"
      class="v-conversation-message__speech-bubble pa-2"
      :class="direction"
    >
      <p>Merhaba sevgili kullanıcı nasılsın</p>
      <p class="text-caption mb-0 text-sm-right">10:32</p>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
.v-conversation-message {
  &__speech-bubble {
    position: relative;
    background: var(--v-primary-lighten5);
    border-radius: .4em;
    min-height: 20px;
    min-width: 100px;
  }

  .incoming {
    background: var(--v-secondary-base);
  }

  .incoming:after {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-right-color: var(--v-secondary-base);
    border-left: 0;
    border-bottom: 0;
    margin-top: -10px;
    margin-left: -20px;
  }

  .outgoing:after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-left-color: var(--v-primary-lighten5);
    border-right: 0;
    border-bottom: 0;
    margin-top: -10px;
    margin-right: -20px;
  }
}
</style>
