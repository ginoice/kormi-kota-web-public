import axios from 'axios'

export async function postData(endPoint, data) {
  const dataResponse = await axios.post(`https://kormikota.mnogolososya.ru/${endPoint}`, data)
  return dataResponse.data 
}

export async function getData(category_id, nft_id) {
  const dataResponse = await axios.get(`https://kormikota.mnogolososya.ru/gifts/${String(category_id)}/${String(nft_id)}/status`)
  return dataResponse.data 
}