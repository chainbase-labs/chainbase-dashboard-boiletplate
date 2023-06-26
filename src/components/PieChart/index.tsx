"use client";
import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Sector } from "recharts";


const COLORS = ["#fd7f6f", "#7eb0d5", "#b2e061", "#bd7ebe", "#ffb55a", "#ffee65", "#beb9db", "#fdcce5", "#8bd3c7"]

interface PieDataItem {
  name: string
  value: number
}

interface SimplePieChartProps {
  data: PieDataItem[]
  nameFormatter?: (name: string) => string
  valueFormatter?: (value: number) => string
}

export default function SimplePieChart({ data, nameFormatter, valueFormatter}: SimplePieChartProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  const onPieEnter = useCallback((_: any, index: number) => {
    setActiveIndex(index);
  },[]);

  const renderActiveShape = useCallback((props: any) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';
  
    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {valueFormatter ? valueFormatter(value) : value}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{nameFormatter ? nameFormatter(payload.name) : payload.name}</text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
          {`(Rate ${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  }, []);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        {/* <Legend verticalAlign="bottom" height={36} /> */}
        <Pie
          activeIndex={activeIndex}
          data={data}
          cx="50%"
          cy="50%"
          // labelLine={false}
          // label={renderCustomizedLabel}
          // shapeRendering={'crispEdges'}
          outerRadius={'70%'}
          innerRadius={'50%'}
          activeShape={renderActiveShape}
          fill="#8884d8"
          dataKey="value"
          nameKey="name"
          onMouseEnter={onPieEnter}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
