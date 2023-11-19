<script lang="ts">
  import CreatePoll from "./lib/CreatePoll.svelte";
  import Footer from "./lib/Footer.svelte";
  import Header from "./lib/Header.svelte";
  import PollList from "./lib/PollList.svelte";
  import Tabs from "./lib/common/Tabs.svelte";

  // tabs
  let items: string[] = ["current polls", "add new poll"];
  let activeItem = items[0];
</script>

<Header />
<main>
  <Tabs {items} bind:activeItem />
  {#if activeItem === items[0]}
    <PollList />
  {:else}
    <CreatePoll on:addPoll={() => (activeItem = items[0])} />
  {/if}
</main>
<Footer />

<style>
  main {
    @apply w-5/6 sm:w-3/4 md:w-2/3 mx-auto py-8;
  }
</style>
