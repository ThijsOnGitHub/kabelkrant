import axios from "axios";
import { WordpressOmroep } from "../../types/wordpressTypes/wordpressOmroep";

export async function fetchOmroep(omroep: string) {
    const result =  await axios.get<WordpressOmroep[]>(`${import.meta.env.VITE_API_URL}/wp-json/wp/v2/omroep?slug=${omroep}`)
    return result.data?.[0]
}