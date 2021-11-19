export interface Candidate {
  id: string;
  Image: string;
  name: string;
  status?: string;
}

export interface CandidateContext {
  candidates: Candidate[];
  changeCandidate: (id: string, status: string) => void;
  search: string;
  setSearch: (word: string) => void;
}

export type CandidateFilter = "all" | "shortlisted" | "rejected";