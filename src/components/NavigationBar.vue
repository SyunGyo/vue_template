<template>
  <div class="pt-4 bg-morning w-full">
    <div class="flex h-12 w-full">
      <p
        onclick="document.location.href='/';"
        class="w-80 ml-4 text-night font-sans font-black text-2xl hover:text-sunset my-auto"
      >
        ぺんた.com
      </p>
      <select
        id="select_search_target"
        class="text-lg bg-gray-200 border-2 border-gray-600 hover:bg-sunset hover:text-white hover: border-night text-black rounded-l-lg block w-30 p-0.5"
      >
        <option value="title" class="bg-white text-night hover:bg-sunset hover:text-white">タイトル</option>
        <option value="author" selected class="bg-white text-night hover:bg-sunset hover:text-white">著者</option>
        <option value="title" class="bg-white text-night hover:bg-sunset hover:text-white">企画</option>
      </select>

      <input type="text" id="search_form" value="" class="text-lg pl-2 bg-white border-2 border-gray-600 w-1/3" />

      <button
        onclick="begin_search()"
        class="w-20 border-2 bg-sunset border-night hover:text-night text-white rounded-r-lg px-2 py-2"
      >
        検索
      </button>
      <div class="flex justify-end w-full m-2">
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          class="text-night border-2 border-night hover:bg-sunset hover:text-white font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
          type="button"
        >
          メニュー
          <svg
            class="w-4 h-4 ml-2"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>

        <div
          id="dropdown"
          class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            <li>
              <a href="/logins/delete" class="block px-4 py-2 hover:bg-sunset dark:hover:text-white">ログアウト</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
