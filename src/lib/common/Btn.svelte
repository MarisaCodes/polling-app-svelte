<script lang="ts">
  export let type: "primary" | "secondary" = "primary";
  export let flat: boolean = false;
  export let inverse: boolean = false;
</script>

<button class={type} class:flat class:inverse on:click>
  <slot />
</button>

<style>
  button {
    @apply rounded-lg w-fit p-2 px-3 capitalize cursor-pointer shadow-md ml-auto;
  }
  .primary {
    @apply bg-orange-500 hover:bg-orange-600 text-gray-200;
  }
  .secondary {
    @apply bg-emerald-500 hover:bg-emerald-600 text-gray-200;
  }
  .flat {
    @apply shadow-none;
  }
  .primary.inverse {
    @apply bg-gray-50 text-orange-500 hover:bg-orange-600 hover:text-gray-200 border-2 border-orange-600;
  }
  .secondary.inverse {
    @apply bg-gray-50 text-emerald-500 hover:bg-emerald-600 hover:text-gray-200 border-2 border-emerald-600;
  }
</style>
