import React, { useState, useEffect } from "react";
import { useCandidates } from "@/CandidateProvider";
import { Candidate } from "@/models/models";
import Loading from "@/components/Loading";
import "@/styles/SingleCandidate.scss";
import { useNavigate } from "react-router-dom";

const SingleCandidate = ({ id }: { id: string | undefined }) => {
  const { candidates, changeCandidate } = useCandidates();
  const [candidate, setCandidate] = useState({} as Candidate);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setCandidate(candidates.find((x) => x.id === id) || ({} as Candidate));
    setLoading(false);
  }, []);

  const changeStatus = (type: string) => {
    changeCandidate(candidate.id, type == "reject" ? "rejected" : "shortlisted");
    navigate('/');
  }

  if (loading) return <Loading />;

  return candidate.name ? (
    <div className="single-candidate">
      <img className="single-candidate-img" src={candidate.Image} />
      <h2 className="single-candidate-name">{candidate.name}</h2>
      <div className="single-candidate-status">
        <h5 className="single-candidate-status-title">Status:</h5>
        <p className="single-candidate-status-p">{candidate.status || "TBD"}</p>
      </div>
      <div className="change-status">
        <div
          className="shortlist-button change-status-button"
          onClick={() => changeStatus("shortlist")}
        >
          Shorlist
        </div>
        <div
          className="reject-button change-status-button"
          onClick={() => changeStatus("reject")}
        >
          Reject
        </div>
      </div>
    </div>
  ) : (
    <p>Candidate Not Found</p>
  );
};

export default SingleCandidate;
