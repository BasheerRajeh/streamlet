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

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.blob();
                cache.set(url, data);
                setCachedData(data);
            } catch (error) {
                console.error(error);
            }
        };

        if (!cache.has(url)) {
            fetchData();
        }
    }, [url]);

    return cachedData ? URL.createObjectURL(cachedData) : url;
};

export default useCache;
