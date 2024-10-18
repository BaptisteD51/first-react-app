import { useEffect, useState } from 'react'

function useFetch(url){
    const [data, setData] = useState(null)
    const [dataLoaded, setDataLoaded] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url)
                if (!response.ok) {
                    throw new Error('Erreur lors du chargement des données')
                }
                const data = await response.json()
                setData(data)
            } catch (err) {
                setError(true)
                console.log(err)
            } finally {
                setDataLoaded(true)
            }

        }

        fetchData()
    }, [url])

    return [data, dataLoaded, error]
}

export default useFetch