<script lang="ts">
  import pollStore from "../stores/pollStore";
  import type { IPoll, IPollFields } from "../types/polls";
  import Btn from "./common/Btn.svelte";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  let fields: IPollFields = {
    pollQuestion: "",
    answerA: "",
    answerB: "",
  };
  let errors: IPollFields = {
    pollQuestion: "",
    answerA: "",
    answerB: "",
  };
  let valid: boolean = false;
  function submit() {
    valid = true;
    // validate question
    if (fields.pollQuestion.trim().length < 5) {
      valid = false;
      errors.pollQuestion = "Question must be at least 5 characters long";
    } else {
      errors.pollQuestion = "";
    }
    // validate answer a
    if (fields.answerA.trim().length < 1) {
      valid = false;
      errors.answerA = "Answer A cannot be empty";
    } else {
      errors.answerA = "";
    }
    // validate answer b
    if (fields.answerB.trim().length < 1) {
      valid = false;
      errors.answerB = "Answer B cannot be empty";
    } else {
      errors.answerB = "";
    }

    // add new poll
    if (valid) {
      const poll: IPoll = {
        ...fields,
        votesA: 0,
        votesB: 0,
        id: Math.random(),
      };
      // save poll to store
      pollStore.update((polls) => {
        return [poll, ...polls];
      });
      // update active item
      dispatch("addPoll");
    }
  }
</script>

<form on:submit|preventDefault={submit}>
  <div>
    <label for="question">poll question</label>
    <input
      type="text"
      id="question"
      placeholder="Question..."
      bind:value={fields.pollQuestion}
    />
    <div class="error">
      {errors.pollQuestion}
    </div>
  </div>

  <div>
    <label for="answer-a">answer a</label>
    <input
      type="text"
      id="answer-a"
      placeholder="Answer A..."
      bind:value={fields.answerA}
    />
    <div class="error">
      {errors.answerA}
    </div>
  </div>

  <div>
    <label for="answer-b">answer b</label>
    <input
      type="text"
      id="answer-b"
      placeholder="Answer B..."
      bind:value={fields.answerB}
    />
    <div class="error">
      {errors.answerB}
    </div>
  </div>
  <Btn type="secondary" inverse={true}>add poll</Btn>
</form>

<style>
  form {
    @apply w-96 mx-auto text-center flex flex-col gap-5;
  }
  form div {
    @apply flex flex-col gap-2;
  }
  input {
    @apply rounded-md border-2 border-gray-400 p-2;
  }
  label {
    @apply self-start capitalize after:content-[':'];
  }
  .error {
    @apply text-red-500;
  }
</style>
