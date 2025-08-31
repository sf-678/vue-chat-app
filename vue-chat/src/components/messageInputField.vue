<script setup lang="ts">
import sendButton from './sendButton.vue';
import textArea from './textArea.vue';
</script>

<template>
  <div class="bg-white rounded-xl p-4 duration-200 hover:shadow-lg hover:shadow-xl ">
    <div class="flex space-x-3">
      <!-- 入力欄エリア -->
      <textArea />
      <!-- 送信ボタン -->
      <sendButton />
    </div>
  </div>
</template>