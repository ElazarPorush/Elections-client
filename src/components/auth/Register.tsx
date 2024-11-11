import React, { useEffect } from 'react'
import { RootState, useAppSelector } from '../../redux/store'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const { user } = useAppSelector((state: RootState) => state.user)
  const navigate = useNavigate()
  useEffect(() => {
    if (user?._id) navigate('/votes')
  }, [])
  return (
    <div>Register</div>
  )
}
