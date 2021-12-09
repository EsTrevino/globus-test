import React from "react";
import { StatusPageContainer, TextContainer } from "./styled";
import DataTable from "../../components/DataTable";
import { columns, mapDataForTable } from "./utils";
import { initialSort } from "./utils";
import { useDataLoader } from "./hooks";

const StatusPage = () => {
  const { loaded, callFailed, data } = useDataLoader();

  return (
    <StatusPageContainer>
      {loaded && (
        <DataTable
          columns={columns}
          data={mapDataForTable(initialSort(data))}
        />
      )}
      {callFailed && <TextContainer>....Error Loading Data</TextContainer>}
      {!loaded && !callFailed && <TextContainer>....Loading</TextContainer>}
    </StatusPageContainer>
  );
};

export default StatusPage;
