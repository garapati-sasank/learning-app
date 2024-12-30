export interface StudentI {
  name: string;
  age: number
}
export interface CustomerI {
  id: number;
  name: string;
  email: string;
  transactionDates: string[];
  address: AddressI
}
export interface AddressI {
  apartmentNo: number;
  street: string;
  village: string;
  state: string;
  zipCode: number;
}
export interface UniversityStudentI {
  name: string;
  age: number;
  email: string;
}
export interface AgenciesResponseI {
  results: AgencyI[];
}
export interface AgencyI {
  agency_id: number;
  toptier_code: string;
  abbreviation: string;
  agency_name: string;
  congressional_justification_url: string;
  active_fy: string;
  active_fq: string;
  outlay_amount: number;
  obligated_amount: number;
  budget_authority_amount: number;
  current_total_budget_authority_amount: number;
  percentage_of_total_budget_authority: number;
  agency_slug: string;
}
export interface StudentListResponseI {
  data: StudentListI[];
  status: number
}
export interface StudentListI {
  country: string;
  course: string;
  studentId: string;
  studentName: string;
  studentPhoneNumber: string;
  year: number;
  __v: number;
  _id: string;
}
export interface VehicleResponseI {
  Count: number;
  Message: string;
  Results: VehicleI[];
  SearchCriteria: string;
}
export interface VehicleI {
  MakeId: number;
  MakeName: string;
  VehicleTypeId: number;
  VehicleTypeName: string;
  customId: string;
}