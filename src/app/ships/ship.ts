export interface Ship {
  id: bigint;
  name: string;
  status: string;
  type: string;
  flag: string;
  yearBuilt: number;
  homePort: string;
  dockNum: bigint;
  lat: number | null;
  lon: number | null;
}
