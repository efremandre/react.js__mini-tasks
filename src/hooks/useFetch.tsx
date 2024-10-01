import {useEffect, useState} from 'react';

const useFetch = (url: string) => {
    const [data, setData] = useState<any>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string|null>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url)
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json()
                setData(result)
            } catch (e) {
                if (e instanceof Error) {
                    setError(e.message);
                } else {
                    setError('Произошла неизвестная ошибка');
                }
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [url])

    return {loading, data, error};
};

export default useFetch;
