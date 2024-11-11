import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { useNavigate } from 'react-router-dom'
import { fetchCandidates } from '../../redux/slices/candidatesSlice'
import VoteCard from './VoteCard'

export default function Votes() {
  const dispatch = useAppDispatch()
  const { user } = useAppSelector(state => state.user)
  const { candidates } = useAppSelector(state => state.candidates)
  const navigate = useNavigate()
  
  useEffect(() => {
    if (!user?._id) {
      navigate('/login')
    }
    dispatch(fetchCandidates())
  }, [])

  if (!candidates) return <p>Error</p>
  if (candidates.length == 0) {
    return <p>Sorry but there is no candidates yet</p>
  }
  return (
    <div className='vote-list'>
      {candidates?.map(candidate => <VoteCard candidate={candidate}/>)}
    </div>
  )
}
