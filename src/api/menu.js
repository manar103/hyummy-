export const API_BASE = 'https://dummyjson.com'


export async function fetchMenu(){
  const res = await fetch(`${API_BASE}/recipes`)
  if(!res.ok) throw new Error('Failed to fetch menu')
  const data = await res.json()
 
  return data.recipes ?? data
}

export async function fetchFoodById(id){
  const res = await fetch(`${API_BASE}/recipes/${id}`)
  if(!res.ok) throw new Error('Failed to fetch food details')
  return res.json()
}
