<script setup lang="ts">
import dispMessageArea from '@/components/dispMessageArea.vue';
import messageInputField from '@/components/messageInputField.vue';
</script>

<template>
    <div class="flex flex-col h-screen w-screen p-10 bg-gray-100">
        <dispMessageArea />
        <messageInputField class="mt-1" />
    </div>
</template>