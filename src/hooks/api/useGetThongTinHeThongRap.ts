import { useQuery } from "@tanstack/react-query"
import { quanLyRapServices } from "services"

export const useGetHeThongRap = () => {
    const q = useQuery({
        queryKey: ['GetHeThongRap'],
        queryFn: () => {
            return quanLyRapServices.getCinemaList()
       
        }
    })
    return {
        ...q,
        data: q.data?.data.content
    }
}