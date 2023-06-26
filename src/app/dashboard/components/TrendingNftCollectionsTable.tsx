'use client'
import GridItemContentContainer from "@/components/GridLayout/GridItemContentContainer";
import { QueryTaskContext } from "@/components/QueryTaskProvider/context";
import ResultTable from "@/components/ResultTable";
import { useContext, useEffect } from "react";
import { top10TxSentAddressQuery, docLink } from '../utils/top10TxSentAddressQuery'

export default function TxsSentAddressTable() {

  const queryTaskVaule = useContext(QueryTaskContext)
  
  const task = queryTaskVaule?.tasks.find(t => t.id === top10TxSentAddressQuery.id)

  useEffect(() => {
    if (!task) {
      queryTaskVaule?.addTask(top10TxSentAddressQuery)
    }
    if (task?.status === 'idle') {
      queryTaskVaule?.callTask(top10TxSentAddressQuery.id)
    }
  }, [queryTaskVaule, task])
  
  const columns = [{ title:"Collection", dataIndex: 'collection.name' }, { title: "Volume", dataIndex: 'volume' }];
  return (
    <GridItemContentContainer title="7d Trending Collections" outerUrl={docLink} dragable>
      <ResultTable columns={columns} data={task?.data || []} />
    </GridItemContentContainer>
  );
}
