import Layout from "../components/layout/layout"
import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import Chart from '../components/chart/chart';
import axios from 'axios'

// import AmCharts4Wrapper from "react-amcharts4";
// import { XYChart } from "@amcharts/amcharts4/charts";

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Brush,
  AreaChart, Area,
} from 'recharts';

const samplesPerHour = 6;
const startDates = {
  'hour': samplesPerHour,
  'day': 24 * samplesPerHour,
  'week': 7 * 24 * samplesPerHour,
  'month': 30 * 24 * samplesPerHour,
}

const DataPage = () => {
    const [data, updateData] = useState(null)

    // axios.get('/api/data').then(res => {
    // }).catch(err => console.log('EROAREEEE', err));

    async function fetchData() {
      const res = await fetch("/api/data");
      res
        .json()
        .then(res => {
          updateData(res)
        })
        .catch(err => console.log('EROAREEEE', err))
    }

    useEffect(() => {
      fetchData();
    }, []);

    if (data) {
      // console.log('DAATTTAAAA', data);
      const measureNames = Object.keys(data[0]).filter(e => e !== 'time');
      // console.log('MEASURE NAMES', measureNames, Object.keys(data[0]).filter(e => e !== 'time'));
      const measures = measureNames.map(measureName => data.map(item => ({'time': Date.parse(item.time), [measureName]: item[measureName]})));
      // console.log('MESUREEEEES', measures);

      return (
        <Layout>
          {measures.map((x, i) => <Chart measureName={measureNames[i]} data={x}></Chart>)}
        </Layout>
      );
    } else {
      console.log('DOWNLOAD', data)
      return <Layout><h1>Getting data...</h1></Layout>
    }
}

export default DataPage