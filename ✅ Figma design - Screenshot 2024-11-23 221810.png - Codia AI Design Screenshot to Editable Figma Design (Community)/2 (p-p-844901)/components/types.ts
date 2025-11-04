export interface OrderStep {
  date: string;
  status: string;
  time: string;
  completed: boolean;
}

export interface Location {
  address: string;
  city: string;
}

export interface Stat {
  label: string;
  value: string;
  icon: string;
}
