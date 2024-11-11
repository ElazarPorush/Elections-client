import { ICandidate } from "../../types/candidate"

interface Props {
    candidate: ICandidate
}

export default function VoteCard({candidate}: Props) {
  return (
    <div className="vote-card">
        <h3>{candidate.name}</h3>
        <img src={candidate.image} alt="Candidate" />
        <p>Votes: {candidate.votes}</p>
        <button>Vote 👇</button>
    </div>
  )
}
