import React, { useState } from 'react'

const Test = ({searchTerm, setSearchTerm}: {searchTerm: string, setSearchTerm: (value: string) => void}) => {

    // const [searchTerm, setSearchTerm] = useState<string>("");
  return (
    <div>
        <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <p>{searchTerm}</p>
    </div>
  )
}

export default Test