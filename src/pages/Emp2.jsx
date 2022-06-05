import React from "react";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Inject,
  Sort,
  Search,
  Toolbar,
  Filter,
  Group,
} from "@syncfusion/ej2-react-grids";
import { EmpData, gridEmp } from "../data/dummy";

const Emp2 = () => {
  return (
    <div className="flex items-center">
      <GridComponent
        id={"grid"}
        allowGrouping={true}
        dataSource={EmpData}
        toolbar={["Search"]}
        allowPaging
        allowFiltering={true}
        allowSorting
      >
        <ColumnsDirective>
          <ColumnDirective
            headerText="Emp Name"
            textAlign={"Center"}
            width={"70"}
            template={gridEmp}
          />
          <ColumnDirective
            field="age"
            headerText="Emp Name"
            textAlign={"Center"}
            width={"150"}
          />
          <ColumnDirective
            field="country"
            headerText="Emp Name"
            textAlign={"Center"}
            width={"150"}
          />
          <ColumnDirective
            field="salary"
            headerText="Emp Name"
            textAlign={"Center"}
            width={"150"}
          />
        </ColumnsDirective>
        <Inject services={[Page, Search, Sort, Toolbar, Filter, Group]} />
      </GridComponent>
    </div>
  );
};
export default Emp2;
