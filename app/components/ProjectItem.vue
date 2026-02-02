<template>
  <div
    class="cursor-pointer group relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg max-w-105 hover:shadow-lg transition-shadow duration-300"
  >
    <h3
      class="uppercase bg-linear-to-br from-indigo-600 to-indigo-700 p-5 text-zinc-50 text-xl shadow-sm rounded-t-lg"
    >
      {{ content.title }}
    </h3>

    <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
      <img
        class="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
        :src="content.image"
        :alt="content.title"
        zoom="true"
      />
    </div>
    <div class="px-6">
      <div class="flex gap-2 mb-3">
        <div
          v-for="(st, i) in content.stack"
          :key="i"
          class="rounded-md max-w-fit bg-indigo-700 py-1 px-3 border border-transparent text-sm text-zinc-50 transition-all shadow-sm"
        >
          {{ st }}
        </div>
      </div>

      <p
        v-for="(pg, i) in content.paragraphs"
        :key="i"
        class="my-6 text-slate-600 leading-normal font-light"
      >
        {{ pg.text }}
      </p>
    </div>

    <div class="p-5 my-2">
      <UButton
        class="rounded-md bg-emerald-400 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-emerald-700 focus:shadow-none active:bg-emerald-700 hover:bg-emerald-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        :to="`http://github.com/thaismr/${content.githubslug}`"
        target="_blank"
        icon="i-simple-icons-github"
        label="View on GitHub"
        color="neutral"
      >
        View on GitHub
      </UButton>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>
