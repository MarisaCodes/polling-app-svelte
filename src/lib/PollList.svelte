<script lang="ts">
  import { fade, scale } from "svelte/transition";
  import { flip } from "svelte/animate";
  import PollDetails from "./PollDetails.svelte";
  import pollStore from "../stores/pollStore";
</script>

<div class="poll-list" in:fade>
  {#each $pollStore as poll, i (poll)}
    <div out:scale animate:flip={{ duration: 500 }}>
      <PollDetails {poll} />
    </div>
  {/each}
</div>

<style>
  .poll-list {
    @apply grid grid-cols-2 gap-5;
  }
</style>
