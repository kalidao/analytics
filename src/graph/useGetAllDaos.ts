import { subgraphs } from '~/constants/subgraphs'
import { useQuery } from '@tanstack/react-query'

export const getAllDaos = async () => {
  const chains = Object.keys(subgraphs['dao'])

  try {
    const res = await Promise.all(
      chains.map((url) =>
        fetch(subgraphs['dao'][Number(url)], {
          method: 'POST',
          body: JSON.stringify({
            query: `query {
                daos(first: 1000) {
                    id
                    token {
                    name
                    }
                    members {
                    id
                    }
                    proposals {
                        id
                        votes {
                          id
                        }
                    }
                }  
            }`,
          }),
        }),
      ),
    )
    const data = await Promise.all(res.map(async (r) => await r.json()))

    let daos = []
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i]?.data?.daos.length; j++) {
        daos.push({
          chainId: chains[i],
          ...data[i].data.daos[j],
        })
      }
    }
    console.log('daos', daos)
    return daos
  } catch (e) {
    console.error('Error fetching user daos.')
    return e
  }
}

export function useGetAllDaos() {
  return useQuery(['getAllDaos'], async () => {
    const data = await getAllDaos()
    return data
  })
}