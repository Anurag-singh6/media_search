import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const KILLIPY_KEY = import.meta.env.VITE_KILLIPY_KEY;

export async function fetchPhotos(query, page = 1, per_page = 20) {
  //dog, 1 page, 20 photo
  const res = await axios.get("https://api.unsplash.com/search/photos", {
    params: { query, page, per_page },
    headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` },
  });
  return res.data;
}

export async function fecthVideos(
  query,
  page = 1,
  per_page = 20,
  country_code = "in"
) {
  let customer_id = Math.floor(Math.random() * 1000);
  const cust_id = customer_id.toString().padStart(2, "1");
  const res = await axios.get(
    `https://api.klipy.com/api/v1/${KILLIPY_KEY}/gifs/search?page=${page}&per_page=${per_page}&q=${query}&customer_id=${cust_id}&locale=${country_code}&content_filter={off}`
  );
  return res.data;
}
