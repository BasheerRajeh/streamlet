import { useState, useEffect } from "react";
import useCache from "./useCache";

interface Props {
    src: string;
}

const useImage = ({ src }: Props) => {
    const { url, loading } = useCache(src);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        const img = new Image();
        img.src = url;

        const handleLoad = () => {
            img.removeEventListener("load", handleLoad);
            img.removeEventListener("error", handleError);
        };

        const handleError = () => {
            setError(true);
            img.removeEventListener("load", handleLoad);
            img.removeEventListener("error", handleError);
        };

        img.addEventListener("load", handleLoad);
        img.addEventListener("error", handleError);

        return () => {
            img.removeEventListener("load", handleLoad);
            img.removeEventListener("error", handleError);
        };
    }, [url]);

    return { url, loading, error };
};

export default useImage;
