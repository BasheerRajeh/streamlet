import { useQuery } from "@tanstack/react-query";
import Game from "../interface/Game.";
import APICleint from "../services/api-client";

const apiClient = new APICleint<Game>("/games");

const useGames = () =>
    useQuery({
        queryKey: ["games"],
        queryFn: apiClient.getAll,
        staleTime: 24 * 60 * 60 * 1000,
    });

export default useGames;
