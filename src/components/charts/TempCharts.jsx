import React, { useEffect } from 'react'
import './Charts.css'
import * as echarts from 'echarts/core';
// 按需引入图表类型
import { BarChart } from 'echarts/charts';
// 按需引入标题，提示框组件
import { TitleComponent, TooltipComponent } from 'echarts/components';
// 引入 Canvas 渲染器
import { CanvasRenderer } from 'echarts/renderers';
echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition]);

export default function TempCharts() {
    useEffect()
    return (
    <div>TempCharts</div>
  )
}
