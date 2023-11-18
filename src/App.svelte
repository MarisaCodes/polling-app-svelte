<script lang="ts">
  import CreatePoll from "./lib/CreatePoll.svelte";
  import Footer from "./lib/Footer.svelte";
  import Header from "./lib/Header.svelte";
  import PollList from "./lib/PollList.svelte";
  import Tabs from "./lib/common/Tabs.svelte";
  import type { IPoll } from "./types/polls";

  // tabs
  let items: string[] = ["current polls", "add new poll"];
  let activeItem = items[0];

  // polls
  let polls: IPoll[] = [
    {
      id: 0,
      pollQuestion: "Python or JavaScript?",
      answerA: "Python",
      answerB: "JavaScript",
      votesA: 9,
      votesB: 15,
    },
  ];

  function onAddPoll(e: Event) {
    const poll = (<CustomEvent>e).detail;
    polls = [...polls, poll];
    console.log(polls);
    activeItem = items[0];
  }
</script>

<Header />
<main>
  <Tabs {items} on:change={() => console.log(activeItem)} bind:activeItem />
  {#if activeItem === items[0]}
    <PollList {polls} />
  {:else}
    <CreatePoll on:addPoll={(e) => onAddPoll(e)} />
  {/if}
</main>
<Footer />

<style>
  main {
    @apply w-5/6 sm:w-3/4 md:w-2/3 mx-auto py-8;
  }
</style>
