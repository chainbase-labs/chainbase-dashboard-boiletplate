"use client";

import { Responsive, WidthProvider } from "react-grid-layout";
import TopTokenHoldersTable from "./TopTokenHoldersTable";
import TopTokenHoldersPieChart from "./TopTokenHoldersPieChart";
import TrendingNftCollectionsTable from "./TrendingNftCollectionsTable";
import TrendingNftCollectionsPieChart from "./TrendingNftCollectionsPieChart";
import AddressTransactionsQueryTable from "./AddressEvent";
import ChainbaseIntroduction from './ChainbaseIntroduction';


const ResponsiveGridLayout = WidthProvider(Responsive);


export default function Dashboard() {
  const layout = [
    { i: "a", x: 0, y: 0, w: 6, h: 10 },
    { i: "b", x: 6, y: 0, w: 6, h: 10 },
    { i: "c", x: 0, y: 10, w: 4, h: 10 },
    { i: "d", x: 4, y: 10, w: 8, h: 10 },
    { i: "e", x: 0, y: 20, w: 8, h: 10 },
    { i: "f", x: 8, y: 20, w: 4, h: 10 },
  ];

  return (
      <ResponsiveGridLayout
        className="layout"
        layouts={{ lg: layout }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 8, sm: 4, xs: 2, xxs: 1 }}
        rowHeight={30}
        onLayoutChange={(layouts) => {
          console.log(layouts)
        }}
        draggableHandle=".grid-item__dragable-handler"
      >
        <div key="a" className="border item bg-white rounded-lg">
          <ChainbaseIntroduction />
        </div>
        <div key="b">
          <AddressTransactionsQueryTable />
        </div>
        <div key="c">
          <TrendingNftCollectionsPieChart />
        </div>
        <div key="d">
          <TrendingNftCollectionsTable />
        </div>
        <div key="e">
          <TopTokenHoldersTable />
        </div>
        <div key="f">
          <TopTokenHoldersPieChart />
        </div>
        {/* <GridItemContainer key='d' className="border item">d</GridItemContainer> */}
      </ResponsiveGridLayout>
  );
}
