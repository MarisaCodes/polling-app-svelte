<script lang="ts">
  import { tweened } from "svelte/motion";
  import pollStore from "../stores/pollStore";
  import type { IPoll } from "../types/polls";
  import Btn from "./common/Btn.svelte";
  import Card from "./common/Card.svelte";

  export let poll: IPoll;
  // reactive value
  $: totalVotes = poll.votesA + poll.votesB;

  function getPercent(a: number, b: number) {
    return Math.round((a / (a + b)) * 100) || 0;
  }
  const percentA = tweened(0);
  const percentB = tweened(0);

  $: percentA.set(getPercent(poll.votesA, poll.votesB));
  $: percentB.set(getPercent(poll.votesB, poll.votesA));

  function onVote(id: number, type: "a" | "b") {
    pollStore.update((polls) => {
      const poll = polls.find((poll) => poll.id === id);
      if (poll) type === "a" ? (poll.votesA += 1) : (poll.votesB += 1);
      return polls;
    });
  }
  function onDelete(id: number) {
    pollStore.update((polls) => {
      return polls.filter((poll) => poll.id !== id);
    });
  }
</script>

<Card>
  <h3>
    {poll.pollQuestion}
  </h3>
  <p>total votes: {totalVotes}</p>
  <button class="answer" on:click={() => onVote(poll.id, "a")}>
    <div class="percent" style={`width:${$percentA}%`} />
    <span>{poll.answerA} ({poll.votesA})</span>
  </button>
  <button class="answer" on:click={() => onVote(poll.id, "b")}>
    <div class="percent" style={`width:${$percentB}%`} />
    <span>{poll.answerB} ({poll.votesB})</span>
  </button>
  <Btn inverse={true} on:click={() => onDelete(poll.id)}>Delete</Btn>
</Card>

<style>
  h3 {
    @apply my-0 mx-auto text-gray-700 font-semibold capitalize;
  }
  p {
    @apply mt-2 text-sm text-gray-600;
  }
  .answer {
    @apply bg-gray-200 w-full text-start cursor-pointer my-3 mx-auto relative hover:opacity-60;
  }
  span {
    @apply inline-block py-3 px-5;
  }
  .percent {
    @apply h-full absolute box-border;
  }
  .answer:first-of-type .percent {
    @apply bg-emerald-500 border-l-2 border-emerald-500 bg-opacity-20;
  }
  .answer:nth-of-type(2) .percent {
    @apply bg-red-500 border-l-2 border-red-500 bg-opacity-20;
  }
</style>
