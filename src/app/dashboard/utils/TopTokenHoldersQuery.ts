import { TaskValue } from "@/components/QueryTaskProvider/context";

export const docLink = "https://docs.chainbase.com/reference/gettoptokenholders"


export const topTokenHoldersQuery: TaskValue = {
  id: 'top-holder-of-ape-query',
  task: async () => {
    const params = new URLSearchParams()
    params.set('chain_id', '1');
    params.set('contract_address', "0x4d224452801aced8b2f0aebe155379bb5d594381")
    const res = await fetch(`/api/chainbase/token/top-holders?${params.toString()}`, {
      method: 'GET',
      headers: {
        "Content-Type": 'application/json'
      }
    });
    const result = await res.json();
    return result?.data
  },
  data: [],
  status: 'idle'
}