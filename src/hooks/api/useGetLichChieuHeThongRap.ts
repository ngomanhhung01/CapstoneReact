import { useQuery } from "@tanstack/react-query"
import { quanLyRapServices } from "services/qlr.services"

export const useGetLichChieuHeThongRap = () => {
    const q = useQuery({
        queryKey: ['GetLichChieuHeThongRap'],
        queryFn: () => {
            return quanLyRapServices.getShowTimesList()
        }
    })

    return {
        ...q,
        data: q.data?.data.content
    }
}