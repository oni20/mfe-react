export enum ETodoFilter {
  ALL = "all",
  ACTIVE = "active",
  COMPLETED = "completed",
}

export interface ITodoFilter {
  setFilter: (filterVal: ETodoFilter) => void;
}
