
export interface Client {
  id: number
  name: string
  lastname: string
  phoneNumber: string 
  email: string 
  loanAmount: number
  interestRate: number 
  amountPaid: number
  balance: number
  currentPaymentDate: string
  nextPaymentDate: string
  status: "On-time" | "Late" | "Completed"
  loanType: string
  address?: string
  idNumber?: string
  employer?: string
  income?: number
  businessDetails?: string
  startDate?: string
  endDate?: string
  notes?: string
  documents?: any
  progress?: string
}