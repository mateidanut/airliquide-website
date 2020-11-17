import React, { useState, useRef, useLayoutEffect } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

const Chart = (props) => {
  const chart = useRef(null);

  useLayoutEffect(() => {
    let x = am4core.create(props.measureName, am4charts.XYChart);
    x.paddingRight = 20;
    x.data = props.data;

    let dateAxis = x.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.groupData = true;
    dateAxis.groupCount = 1000;
    dateAxis.groupIntervals.setAll([
      { timeUnit: "minute", count: 10 },
      { timeUnit: "hour", count: 1 },
      { timeUnit: "hour", count: 6 },
      { timeUnit: "hour", count: 12 },
      { timeUnit: "day", count: 1 },
      { timeUnit: "day", count: 2 },
      { timeUnit: "day", count: 3 },
      { timeUnit: "week", count: 1 },
      { timeUnit: "week", count: 2 },
      { timeUnit: "month", count: 1 },
      { timeUnit: "month", count: 2 },
      { timeUnit: "month", count: 3 },
      { timeUnit: "month", count: 4 },
      { timeUnit: "month", count: 6 },
      { timeUnit: "year", count: 1 }
    ]);

    let valueAxis = x.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;

    let series = x.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "time";
    series.dataFields.valueY = props.measureName;
    series.groupFields.valueY = "average";
    series.tooltipText = "{valueY.value}";
    x.cursor = new am4charts.XYCursor();

    chart.current = x;
    return () => {
      x.dispose();
    };
  }, []);

  return (
    <>
    <p style={{marginTop: '.8cm'}}></p>
    <div id={props.measureName} style={{ width: "98vw", height: "400px" }}></div>
    </>
  );
}

export default Chart