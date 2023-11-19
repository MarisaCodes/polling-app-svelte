import { writable } from "svelte/store";
import type { IPoll } from "../types/polls";

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

const pollStore = writable(polls);

export default pollStore;
