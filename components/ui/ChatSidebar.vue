<script setup>
  import { ref, computed } from 'vue';
  const search = ref('');
  const tab = ref('all');
  const activeId = 2;
  const users = [
    {
      id: 1,
      avatar: '/avatars/avatar.png',
      name: 'Олимпиада Аристархова',
      lastMessage: 'Привет! Можешь подсказать что будет...',
      time: '23:20',
      count: 0,
      online: true,
    },
    {
      id: 2,
      avatar: '/avatars/avatar1.png',
      name: 'Левина Наталья',
      lastMessage: 'Вы: Давай, завтра спишемся!',
      time: '18:30',
      count: 21,
      online: false,
    },
    {
      id: 3,
      avatar: '/avatars/avatar2.png',
      name: 'Илона Маскова',
      lastMessage: 'Я же вижу, что ты онлайн, о...',
      time: 'Вчера',
      count: 3,
      online: true,
    },
  ];

  const filteredUsers = computed(() =>
    tab.value === 'unread' ? users.filter((user) => user.count) : users,
  );

  const totalUnread = computed(() => users.reduce((sum, user) => sum + user.count, 0));
</script>

<template>
  <div
    class="w-[300px] box-border bg-[#fff] p-[12px] pr-[5px] flex flex-col rounded-2xl shadow-md rounded-[20px]"
  >
    <div class="flex items-center gap-[8px] p-[12px] border-b border-[#EBEAEB] box-border w-full">
      <div
        class="flex items-center gap-[12px] border-box border border-[#EBEAEB] rounded-[10px] px-[11.5px] py-[7.25px] m-[0px] w-full"
      >
        <button
          class="cursor-pointer border-none bg-[#fff] p-[0px] m-[0px]"
          @click="$refs.searchInput.focus()"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.8045 14.8625L11.8252 10.8831C12.9096 9.55686 13.4428 7.86453 13.3144 6.15617C13.1861 4.44782 12.406 2.85415 11.1356 1.70481C9.86516 0.555472 8.20158 -0.0616068 6.48895 -0.0187856C4.77632 0.0240356 3.14566 0.723481 1.93426 1.93487C0.72287 3.14627 0.0234252 4.77693 -0.019396 6.48956C-0.0622172 8.20219 0.554862 9.86577 1.7042 11.1362C2.85354 12.4066 4.44721 13.1867 6.15556 13.315C7.86392 13.4434 9.55625 12.9102 10.8825 11.8258L14.8619 15.8051C14.9876 15.9266 15.156 15.9938 15.3308 15.9922C15.5056 15.9907 15.6728 15.9206 15.7964 15.797C15.92 15.6734 15.9901 15.5062 15.9916 15.3314C15.9932 15.1566 15.926 14.9882 15.8045 14.8625ZM6.66652 12.0005C5.61169 12.0005 4.58054 11.6877 3.70348 11.1016C2.82642 10.5156 2.14283 9.68265 1.73916 8.70811C1.3355 7.73357 1.22988 6.66122 1.43567 5.62665C1.64145 4.59208 2.14941 3.64178 2.89529 2.8959C3.64117 2.15002 4.59147 1.64206 5.62604 1.43628C6.6606 1.23049 7.73296 1.33611 8.7075 1.73977C9.68204 2.14344 10.515 2.82703 11.101 3.70409C11.6871 4.58115 11.9999 5.6123 11.9999 6.66713C11.9983 8.08113 11.4359 9.43676 10.436 10.4366C9.43615 11.4365 8.08052 11.9989 6.66652 12.0005Z"
              fill="#73738C"
            />
          </svg>
        </button>
        <input
          v-model="search"
          type="text"
          placeholder="Найти чат с подругой"
          class="bg-transparent text-[14px] placeholder:text-[14px] placeholder-[#73738C] border-none outline-none box-border p-0"
          ref="searchInput"
        />
      </div>
      <button
        class="flex items-center justify-center transition-colors border-none bg-transparent w-12 h-12 p-[0px] cursor-pointer"
      >
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <circle cx="18" cy="18" r="18" fill="#E45293" />
          <line
            x1="12"
            y1="18"
            x2="24"
            y2="18"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
          />
          <line
            x1="18"
            y1="12"
            x2="18"
            y2="24"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </button>
    </div>

    <div class="flex gap-[16px] px-[12px] py-[8px]">
      <div
        :class="[
          'pb-[2px]',
          tab === 'all' ? 'border-b-[2px] border-[#E45293]' : '',
          'flex items-center',
        ]"
      >
        <button
          :class="[
            'border-none bg-transparent px-[0px]',
            tab === 'all' ? 'text-[#E45293]' : 'text-[#484858]',
          ]"
          @click="tab = 'all'"
        >
          <span class="mr-[4px] text-[14px]"> Все </span>
        </button>
        <div
          :class="[
            'flex items-center justify-center rounded-full',
            'h-[16px] w-[21px]',
            tab === 'all' ? 'bg-[#FDEDF4]' : 'bg-[#E0F4FD]',
          ]"
        >
          <span class="text-[10px] leading-[16px]">{{ totalUnread }}</span>
        </div>
      </div>
      <div
        :class="[
          'pb-[2px]',
          tab === 'unread' ? 'border-b-[2px] border-[#E45293]' : '',
          'flex items-center',
        ]"
      >
        <button
          :class="[
            'border-none bg-transparent px-[0px]',
            tab === 'unread' ? 'text-[#E45293]' : 'text-[#484858]',
          ]"
          @click="tab = 'unread'"
        >
          <span class="mr-[4px] text-[14px]"> Непрочитанные </span>
        </button>
        <div
          :class="[
            'flex items-center justify-center rounded-full',
            'h-[16px] w-[21px]',
            tab === 'unread' ? 'bg-[#FDEDF4]' : 'bg-[#E0F4FD]',
          ]"
        >
          <span class="text-[10px] leading-[16px]">{{ totalUnread }}</span>
        </div>
      </div>
    </div>

    <div class="flex-1 overflow-y-auto flex flex-col gap-1 w-full">
      <div
        v-for="user in filteredUsers"
        :key="user.id"
        :class="[
          'flex items-start py-2 px-2 rounded-xl cursor-pointer transition-colors px-[12px] py-[8px]',
        ]"
      >
        <div class="relative mr-[12px]">
          <img :src="user.avatar" alt="avatar" class="rounded-full w-[40px] h-[40px]" />
          <svg
            v-if="user.online"
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="absolute top-[29px] left-[29px]"
          >
            <circle cx="5.5" cy="5.5" r="4.5" fill="#A3DBCC" stroke="white" stroke-width="2" />
          </svg>
        </div>
        <div class="flex flex-col">
          <div class="flex items-center justify-between">
            <span
              class="font-semibold text-[14px] text-gray-900 w-[164px] truncate"
              :title="user.name"
              >{{ user.name }}</span
            >
            <span class="text-[10px] text-[#73738C] flex-shrink-0">{{ user.time }}</span>
          </div>
          <div
            :class="[
              'mt-[7px] w-full',
              user.count ? 'flex items-center gap-[2px] w-full' : 'inline-block',
            ]"
          >
            <div class="flex-1">
              <span class="block text-[12px] text-[#73738C] max-w-[200px] truncate">{{
                user.lastMessage
              }}</span>
            </div>
            <div
              v-if="user.count"
              :class="[
                'flex items-center justify-center rounded-full h-[16px] w-[21px] bg-[#E0F4FD]',
              ]"
            >
              <span class="text-[10px] leading-[16px]">{{ user.count }} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
