'use client'
import GridItemContentContainer from "@/components/GridLayout/GridItemContentContainer";
import { QueryTaskContext } from "@/components/QueryTaskProvider/context";
import { useContext, useEffect } from "react";
import { topTokenHoldersQuery, docLink } from '../utils/TopTokenHoldersQuery'
import SimplePieChart from "@/components/PieChart";
import { formatAddressToDisplay } from "@/utils/formatter";

const valueFormatter = (value: number) => `${value.toFixed(2)} APE`

export default function TopTokenHoldersPieChart() {

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
  console.log(task?.data)
  
  const data = task?.data?.map((r: { wallet_address: any; amount: any; }) => ({ name: r.wallet_address, value: Number(r.amount) })) || []

  return (
    <GridItemContentContainer title="Top 20 Holders of APE" outerUrl={docLink} dragable>
      <SimplePieChart data={data} nameFormatter={formatAddressToDisplay} valueFormatter={valueFormatter} />
    </GridItemContentContainer>
  );
}