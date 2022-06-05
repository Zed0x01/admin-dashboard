import React from "react";
import {ChartComponent,SplineAreaSeries , SeriesCollectionDirective,SeriesDirective,Inject,DateTime,Legend} from "@syncfusion/ej2-react-charts";
import {areaCustomSeries,areaPrimaryXAxis,areaPrimaryYAxis} from "../../data/dummy";
import {useStateContext} from "../../contexts/ContextProvider";
import {Header} from "../../components";

const Area = () => {
  const {currentMode} =useStateContext();
  return (
      <div className="mt-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
        <Header category={"Chart"} title={"Inflation Rate"} />
        <ChartComponent
            id={"area Chart"}
            height={"420px"}
            primaryXAxis={areaPrimaryXAxis}
            primaryYAxis={areaPrimaryYAxis}
            chartArea={{border:{width:0}}}
            tooltip={{enable:true}}
            background={currentMode === 'Dark' ? '#33373E' :'#fff'}
        >
          <Inject services={[DateTime,Legend,SplineAreaSeries]} />
          <SeriesCollectionDirective>
            {areaCustomSeries.map((item,index)=>
                <SeriesDirective key={index} {...item} />)}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
  );
};
export default Area;
