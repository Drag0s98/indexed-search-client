export interface IPagination {
  from: number;
  to: number;
  total: { relation: string; value: number };
}
