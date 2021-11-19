import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

import { Candidate, CandidateContext } from "./models/models";

const CandidateContext = React.createContext({} as CandidateContext);

export const useCandidates = () => useContext(CandidateContext);

const CandidateProvider = ({ children }: { children: React.ReactNode }) => {
  const [candidates, setCandidates] = useState([] as Candidate[]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json"
      );
      setCandidates(data);
    })();
  }, []);

  const changeCandidate = (id: string, status: string) => {
    setCandidates((c) => {
      const newC = [...c];
      const index = newC.findIndex((x) => x.id === id);
      newC[index] = { ...newC[index], status };
      return newC;
    });
  };

  return (
    <CandidateContext.Provider
      value={{ candidates, changeCandidate, search, setSearch }}
    >
      {children}
    </CandidateContext.Provider>
  );
};

export default CandidateProvider;
