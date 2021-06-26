<script>
import VConversationMessage from './VConversationMessage';

export default {
  name: 'VConversationContainer',
  components: { VConversationMessage },
};
</script>

<template>
  <div class="v-conversation-container">
    <v-toolbar class="v-conversation-container__header" dark color="primary" width="100%">
      <v-avatar class="mr-3" size="40">
        <img
          src="https://pbs.twimg.com/profile_images/1354745782394564616/iTIzzheJ_400x400.jpg"
          alt="İbrahim Turan"
        >
      </v-avatar>

      <v-toolbar-title>Başlık</v-toolbar-title>
    </v-toolbar>

    <div class="v-conversation-container__content">
      <VConversationMessage
        v-for="n in 20"
        :key="n"
        message="Merhaba sevgili kullanıcı nasılsın"
        :direction="n % 2 === 0 ? 'incoming' : 'outgoing'"
        time="10:32"
      />
    </div>

    <div class="v-conversation-container__actions">
      <v-toolbar height="auto" color="accent" class="pa-2">
        <v-text-field
          class="mr-1"
          solo hide-details
          label="Write a message..."
          placeholder="Write a message..."
        />

        <v-btn icon>
          <v-icon>mdi-send</v-icon>
        </v-btn>
      </v-toolbar>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.v-conversation-container {
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;

  &__header {
    border: 3px solid var(--v-primary-lighten5);
  }

  &__content {
    flex: 0 1 100%;
    position: relative;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: #ff7700;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%23cc0000' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23aa0000' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23d6002b' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23b10022' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23d9004b' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23b2003d' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23d3006c' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23ac0057' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23c4008c' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%239e0071' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23aa00aa' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23880088' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
  }

  &__actions {
    flex: 1 0 0;
  }
}
</style>
