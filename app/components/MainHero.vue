<template>
  <section>
    <div
      class="relative min-h-70 flex flex-col justify-center items-center my-6 bg-white shadow-sm border border-slate-200 rounded-lg p-2"
    >
      <div class="p-3 text-center">
        <div class="flex justify-center mb-2">
          <h2 class="text-slate-800 text-2xl font-semibold">
            Welcome to Blokos!
          </h2>
        </div>
        <p
          class="block text-slate-600 leading-normal font-light text-xl my-7 max-w-2xl"
        >
          Track some of my - old and new - personal projects and their current
          status.
        </p>
        <div class="text-center">
          <UButton
            to="https://github.com/thaismr"
            target="_blank"
            icon="i-simple-icons-github"
            label="View all on GitHub"
            class="min-w-32 rounded-md bg-emerald-400 py-3 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-emerald-700 focus:shadow-none active:bg-emerald-700 hover:bg-emerald-700 active:shadow-none"
          />
        </div>
      </div>
    </div>
  </section>
</template>
