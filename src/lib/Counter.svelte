<script lang="ts">
  let count: number = 0;
  const increment = () => {
    count += 1;
  };
</script>

<button class="bg-emerald-400 rounded-lg p-3 px-4" on:click={increment}>
  count is {count}
</button>
