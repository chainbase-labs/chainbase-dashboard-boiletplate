'use client'
import GridItemContentContainer from "@/components/GridLayout/GridItemContentContainer";
import { QueryTaskContext } from "@/components/QueryTaskProvider/context";
import { useContext, useEffect } from "react";
import SimplePieChart from "@/components/PieChart";
import { top10TxSentAddressQuery, docLink } from '../utils/top10TxSentAddressQuery'

export default function TxsSentAddressPieChart() {

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
  
  const data = task?.data?.map((r: any) => ({ name: r.collection?.name, value: Number(r.volume) })) || []
  return (
    <GridItemContentContainer title="7d Trending Collections" outerUrl={docLink} dragable>
      <SimplePieChart data={data} />
    </GridItemContentContainer>
  );
}
