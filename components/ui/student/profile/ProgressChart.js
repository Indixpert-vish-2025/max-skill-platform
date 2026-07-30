"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", thisWeek: 65, lastWeek: 75 },
  { day: "Tue", thisWeek: 62, lastWeek: 55 },
  { day: "Wed", thisWeek: 58, lastWeek: 30 },
  { day: "Thu", thisWeek: 52, lastWeek: 70 },
  { day: "Fri", thisWeek: 30, lastWeek: 28 },
  { day: "Sat", thisWeek: 76, lastWeek: 18 },
  { day: "Sun", thisWeek: 82, lastWeek: 58 },
];

export default function ProgressChart() {
  return (
    <div className="progress-chart">

      <div className="chart-top">

        <h4>Progress</h4>

        <div className="chart-right">

          <div className="legend orange">
            <span></span> Last Week
          </div>

          <div className="legend green">
            <span></span> This Week
          </div>

          <button>This Week</button>

        </div>

      </div>

      <div className="chart-wrapper">

        <ResponsiveContainer width="100%" height={220}>

          <AreaChart data={data}>

            <defs>

              <linearGradient id="greenFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4CBC9A" stopOpacity={0.35} />
                <stop offset="95%" stopColor="#4CBC9A" stopOpacity={0} />
              </linearGradient>

              <linearGradient id="orangeFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FDBA12" stopOpacity={0.30} />
                <stop offset="95%" stopColor="#FDBA12" stopOpacity={0} />
              </linearGradient>

            </defs>

            <CartesianGrid stroke="#EEF1F5" vertical={false} />

            <XAxis dataKey="day" />

            <YAxis />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="thisWeek"
              stroke="#4CBC9A"
              strokeWidth={3}
              fill="url(#greenFill)"
            />

            <Area
              type="monotone"
              dataKey="lastWeek"
              stroke="#FDBA12"
              strokeWidth={3}
              fill="url(#orangeFill)"
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

      <div className="chart-summary">

        <div>

          <small>This Week</small>

          <h3>+32%</h3>

        </div>

        <div>

          <small>Last Week</small>

          <h3 className="orange">+24%</h3>

        </div>

      </div>

    </div>
  );
}