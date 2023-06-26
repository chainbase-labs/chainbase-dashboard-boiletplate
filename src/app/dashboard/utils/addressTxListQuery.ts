import { TaskValue } from "@/components/QueryTaskProvider/context";

export const getQueryString = (addr: string) => `SELECT\n    transaction_hash,\n    block_timestamp\nfrom\n    ethereum.transactions\nWHERE\n    from_address = \"${addr}\"\norder by\n    block_timestamp DESC\nlimit\n    20`

export const addressTxListQuery: TaskValue = {
  id: 'address-tx-query',
  task: async (params: {address: string}) => {
    const res = await fetch('/api/chainbase/dw/query', {
      method: 'POST',
      body: JSON.stringify({
        query: getQueryString(params.address),
      }),
      headers: {
        "Content-Type": 'application/json'
      }
    });
    const result = await res.json();
    return result?.data?.result
  },
  data: [],
  status: 'idle'
}