import { useState, useEffect } from "react";
import { LRUCache } from "lru-cache";

const options = {
    max: 500,
    maxAge: 1000 * 60 * 60 // 1 hour
}

const cache = new LRUCache<string, Blob>(options);

const useCache = (url: string) => {
    const [cachedData, setCachedData] = useState<Blob | undefined>(
        cache.get(url)
    );
    const [loading, setLoading] = useState<boolean>(!cachedData);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.blob();
                cache.set(url, data);
                setCachedData(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        if (!cache.has(url)) {
            setLoading(true);
            fetchData();
        }
    }, [url]);


    return { url: cachedData ? URL.createObjectURL(cachedData) : url, loading };
};

export default useCache;
