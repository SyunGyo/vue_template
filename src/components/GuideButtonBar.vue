<template>
  <div class="h-12 mb-0 pb-0 flex justify-center bg-morning border-b-2 border-b-sunset">
    <button
      onclick="document.location.href='/bookshelf/';"
      class="text-black h-10 mt-2 ml-4 mr-4 px-2 rounded-t-lg bg-cream text-xl border-2 border-b-sunset border-t-sunset border-l-sunset border-r-sunset hover:bg-lightcream"
    >
      あなたのコレクション
    </button>
    <button
      onclick="document.location.href='/logins/new';"
      class="h-10 mt-2 ml-4 mr-4 px-2 rounded-t-lg bg-cream text-xl border-2 border-b-sunset border-t-sunset border-l-sunset border-r-sunset hover:bg-lightcream"
    >
      あなたのコレクション
    </button>
    <button
      onclick="document.location.href='/';"
      class="h-10 mt-2 ml-4 mr-4 px-2 rounded-t-lg bg-lightcream text-xl border-2 border-b-lightcream border-t-sunset border-l-sunset border-r-sunset hover:bg-cream"
    >
      人気の本
    </button>
  </div>
</template>
