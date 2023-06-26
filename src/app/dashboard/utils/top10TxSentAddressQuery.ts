import { TaskValue } from "@/components/QueryTaskProvider/context";

export const docLink = 'https://docs.chainbase.com/reference/getnftcollectiontrending'

export const top10TxSentAddressQuery: TaskValue = {
  id: 'nft-trending-query',
  task: async () => {
    const params = new URLSearchParams()
    params.set('chain_id', '1');
    params.set('range', '7d');
    params.set('exchange_name', 'all');
    params.set('sort', 'volume_desc');
    const res = await fetch(`/api/chainbase/nft/collection/trending?${params.toString()}`, {
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