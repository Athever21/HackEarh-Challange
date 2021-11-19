import React, { useState, useEffect } from "react";
import { Candidate, CandidateFilter } from "@/models/models";
import { useCandidates } from "@/CandidateProvider";
import "@/styles/CandidateList.scss";
import { Link } from "react-router-dom";
import Loading from "@/components/Loading";

const Candidates = ({ filter }: { filter: CandidateFilter }) => {
  const { candidates, search } = useCandidates();
  const [show, setShow] = useState([] as Candidate[]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setShow(
      candidates.filter((x) => {
        if (filter === "shortlisted" && x.status !== "shortlisted")
          return false;
        if (filter === "rejected" && x.status !== "rejected") return false;
        if (!x.name.toLowerCase().includes(search.toLowerCase())) return false;

        return true;
      })
    );
    setLoading(false);
  }, [candidates, filter, search]);

  if (loading) return <Loading />;

  return (
    <div className="candidate-list">
      {!!show.length &&
        show.map((x) => (
          <Link to={`/${x.id}`} className="candidate-list-item" key={x.id}>
            <img className="candidate-list-item-img" src={x.Image} />
            <h3 className="candidate-list-item-name">{x.name}</h3>
            <div className="candidate-list-item-status">
              <h5 className="candidate-list-item-status-title">Status:</h5>
              <p className={`candidate-list-item-status-p ${x.status}`}>
                {x.status || "TBD"}
              </p>
            </div>
          </Link>
        ))}
      {!show.length && <p className="no-candidates">No candidates found</p>}
    </div>
  );
};

export default Candidates;
