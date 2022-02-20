import React from "react";
import CurrentTable from "./currentTable";
import Headers from "./header";
import PreviousCultivationTable from "./previousCultivation";
import TrackingPara from "./trackingPara";
export default function CultivationTracking() {
  return (
    <>
      <Headers />
      <TrackingPara />
      <CurrentTable />
      {/* <PreviousCultivationTable /> */}
    </>
  );
}
