"use client";

export default function CircularProgress({

  value,

  color,

}) {

  const degree = (value / 100) * 360;

  return (

    <div
      className="circle-progress"
      style={{
        background: `conic-gradient(${color} ${degree}deg,#eceff3 0deg)`,
      }}
    >

      <div className="circle-inner">

        <span>

          {value}%

        </span>

      </div>

    </div>

  );

}