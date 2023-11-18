<script lang="ts">
  export let items: string[];
  export let activeItem: string;
</script>

<div class="tabs">
  {#each items as item}
    <label for={item} class:active={item === activeItem}>
      {item}
    </label>
    <input
      type="radio"
      name="tab"
      id={item}
      value={item}
      bind:group={activeItem}
    />
  {/each}
</div>

<style>
  input[type="radio"] {
    @apply hidden;
  }
  .active {
    @apply text-red-500 border-b-2 border-b-red-400 pb-2;
  }
  .tabs {
    @apply mb-10 flex gap-5 justify-center p-0;
  }
  label {
    @apply cursor-pointer text-gray-500 capitalize;
  }
</style>
