export interface Iexpense {
  id: string;
  title: string;
  category: string;
  amount: number;
}
export interface IerrorRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  message: string;
}
export interface Ierror {
  [key: string]: IerrorRule[];
}
// export interface Ierror {
//   id: [{ required: boolean; message: string }];
//   title: [
//     { required: boolean; message: string },
//     { minLength: number; message: string },
//     { maxLength: number; message: string }
//   ];
//   category: [{ required: boolean; message: string }];
//   amount: [{ required: boolean; message: string }];
// }
