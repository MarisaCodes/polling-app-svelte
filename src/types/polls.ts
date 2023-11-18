export interface IPollFields {
  pollQuestion: string;
  answerA: string;
  answerB: string;
}
export interface IPoll extends IPollFields {
  votesA: number;
  votesB: number;
  id: number;
}
