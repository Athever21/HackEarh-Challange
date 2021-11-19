import React, { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";

const Candidates = lazy(() => import("@/components/Candidates"));
const SingleCandidate = lazy(() => import("@/components/SingleCandidate"));

const HandlePath = () => {
  const { id } = useParams();

  if (id === "shortlisted" || id === "rejected")
    return (
      <Suspense fallback={<></>}>
        <Candidates filter={id} />
      </Suspense>
    );

  return <SingleCandidate id={id}/>;
};

export default HandlePath;
