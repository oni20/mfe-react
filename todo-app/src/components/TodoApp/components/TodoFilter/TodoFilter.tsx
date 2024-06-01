import React from "react";

// Type files
import { ETodoFilter, ITodoFilter } from "../../types/TodoFilter.d";

// Lazy imports
const RadioButton = React.lazy(() => import("foundation_ui/RadioButton"));

const TodoFilter = (props: ITodoFilter) => {
  const { setFilter } = props;

  const handleFilterChange = (selectedRadioVal: string) => {
    setFilter?.(selectedRadioVal as ETodoFilter);
  };

  return (
    <React.Suspense fallback="Loading Todo Filter...">
      <fieldset className="flex flex-col my-5">
        <legend className="text-base">Filter by: </legend>
        <div className="flex flex-row gap-2">
          <RadioButton
            id="todoAll"
            labelStyle="text-base"
            inputStyle="mr-2"
            radioLabel="All"
            radioName="filterTodo"
            radioValue={ETodoFilter.ALL}
            onChange={handleFilterChange}
          />
          <RadioButton
            id="todoActive"
            labelStyle="text-base"
            inputStyle="mr-2"
            radioLabel="Active"
            radioName="filterTodo"
            radioValue={ETodoFilter.ACTIVE}
            onChange={handleFilterChange}
          />
          <RadioButton
            id="todoCompleted"
            labelStyle="text-base"
            inputStyle="mr-2"
            radioLabel="Completed"
            radioName="filterTodo"
            radioValue={ETodoFilter.COMPLETED}
            onChange={handleFilterChange}
          />
        </div>
      </fieldset>
    </React.Suspense>
  );
};

export default TodoFilter;
