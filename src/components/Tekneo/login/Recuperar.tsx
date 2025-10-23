import React, { type Dispatch, type SetStateAction } from 'react'

export default function Recuperar({setViewRecovery}: {setViewRecovery: Dispatch<SetStateAction<boolean>>}) {
  return (
    <div onClick={() => setViewRecovery(false)}>Recuperar</div>
  )
}
