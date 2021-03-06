import React, { useState, useEffect } from 'react'
const GitIds = () => {
    const [name, setName] = useState('')
    const [id, setId] = useState('sakanosita')

    const ids = ['sakanosita', 'motobrew', 'chaspy']
    const getRandomId = () => {
        const _id = ids[Math.floor(Math.random() * ids.length)]
        setId(_id)
    }
    useEffect(() => {
        fetch(`https://api.github.com/users/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setName(data.name)
            })
            .catch(error => {
                console.log(error);
            })
    }, [id])

    return (
        <>
            <p>{id}の、 GitHub上の名前は{name}です。</p>
            <button onClick={getRandomId}>IDを変更</button>
        </>
    )
}

export default GitIds