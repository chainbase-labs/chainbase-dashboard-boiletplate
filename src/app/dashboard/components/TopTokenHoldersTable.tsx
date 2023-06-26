'use client'
import GridItemContentContainer from "@/components/GridLayout/GridItemContentContainer";
import { QueryTaskContext } from "@/components/QueryTaskProvider/context";
import ResultTable from "@/components/ResultTable";
import { useContext, useEffect } from "react";
import { topTokenHoldersQuery, docLink } from '../utils/TopTokenHoldersQuery'

export default function TopTokenHoldersTable() {

  const queryTaskVaule = useContext(QueryTaskContext)
  
  const task = queryTaskVaule?.tasks.find(t => t.id === topTokenHoldersQuery.id)

  useEffect(() => {
    if (!task) {
      queryTaskVaule?.addTask(topTokenHoldersQuery)
    }
    if (task?.status === 'idle') {
      queryTaskVaule?.callTask(topTokenHoldersQuery.id)
    }
  }, [queryTaskVaule, task])
  
  const columns = [{ title:"Address", dataIndex: 'wallet_address' }, { title: "Total Amount", dataIndex: 'amount' }];
  return (
    <GridItemContentContainer title="Top 20 Holders of APE" outerUrl={docLink} dragable>
      <ResultTable columns={columns} data={task?.data || []} />
    </GridItemContentContainer>
  );
}
