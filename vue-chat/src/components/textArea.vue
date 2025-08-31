<template>
    <div class="flex-1">
        <!-- テキストエリア -->
        <textarea placeholder="メッセージを入力..."
            class="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            rows="1"></textarea>

        <!-- 文字数カウンター（オプション） -->
        <div class="mt-1 text-xs text-gray-500 text-right">
            messageInputField 0 / 1000
        </div>
    </div>
</template>