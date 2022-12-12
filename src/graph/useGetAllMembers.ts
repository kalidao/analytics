import { subgraphs } from '~/constants/subgraphs'
import { useQuery } from '@tanstack/react-query'

export const getAllMembers = async () => {
  const chains = Object.keys(subgraphs['dao'])

  try {
    const res = await Promise.all(
      chains.map((url) =>
        fetch(subgraphs['dao'][Number(url)], {
          method: 'POST',
          body: JSON.stringify({
            query: `query {
                members(first: 1000) {
                    id
                }  
            }`,
          }),
        }),
      ),
    )
    const data = await Promise.all(res.map(async (r) => await r.json()))

    let members = []
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i]?.data?.members.length; j++) {
            members.push({
            chainId: chains[i],
            ...data[i].data.members[j],
            })
        }
    }
    console.log('data', data, members)
    return members
  } catch (e) {
    console.error('Error fetching user daos.')
    return e
  }
}

export function useGetAllMembers() {
  return useQuery(['getAllMembers'], async () => {
    const data = await getAllMembers()
    return data
  })
}