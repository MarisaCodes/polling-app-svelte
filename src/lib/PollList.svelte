<script lang="ts">
  import type { IPoll } from "../types/polls";

  export let polls: IPoll[] = [];
</script>

<div class="poll-list">
  {#each polls as poll}
    <div>{poll.pollQuestion}</div>
  {/each}
</div>

<style>
  .poll-list {
    @apply grid grid-cols-2 gap-5;
  }
</style>
