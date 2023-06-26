'use client'

import GridItemContentContainer from "@/components/GridLayout/GridItemContentContainer";
import { QueryTaskContext } from "@/components/QueryTaskProvider/context";
import ResultTable from "@/components/ResultTable";
import { useCallback, useContext, useEffect } from "react";
import { addressTxListQuery, getQueryString } from '../utils/addressTxListQuery'
import AddressInput from "@/components/AddressInput";

export default function AddressTransactionsQueryTable() {

  const queryTaskVaule = useContext(QueryTaskContext)
  
  const task = queryTaskVaule?.tasks.find(t => t.id === addressTxListQuery.id)

  useEffect(() => {
    if (!task) {
      queryTaskVaule?.addTask(addressTxListQuery)
    }
  }, [queryTaskVaule, task])
  
  const columns = [{ title:"Transaction", dataIndex: 'transaction_hash' }, { title: "Timestamp", dataIndex: 'block_timestamp' }];
  
  const handleQuery = useCallback((address: string) => {
    if (task && queryTaskVaule) {
      queryTaskVaule?.callTask(addressTxListQuery.id, { address })
    }
  }, [queryTaskVaule, task])
  return (
    <GridItemContentContainer title="Gas Usage Address Table" outerUrl={`https://console.chainbase.com/dataCloud?sql=${encodeURIComponent(getQueryString("0x"))}`} dragable>
      <AddressInput onQuery={handleQuery} />
      <ResultTable columns={columns} data={task?.data || []} />
    </GridItemContentContainer>
  );
}