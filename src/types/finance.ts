export type TransactionType = 'income' | 'expense'

export type Category =
  | 'alimentacao'
  | 'transporte'
  | 'moradia'
  | 'lazer'
  | 'saude'
  | 'educacao'
  | 'salario'
  | 'freelance'
  | 'investimentos'
  | 'outros'

export interface Transaction {
  id: string
  description: string
  amount: number
  type: TransactionType
  category: Category
  date: string
}

export interface MonthlyData {
  month: string
  income: number
  expenses: number
  balance: number
}

export interface CategoryData {
  category: Category
  amount: number
  color: string
}

export const categoryLabels: Record<Category, string> = {
  alimentacao: 'Alimentacao',
  transporte: 'Transporte',
  moradia: 'Moradia',
  lazer: 'Lazer',
  saude: 'Saude',
  educacao: 'Educacao',
  salario: 'Salario',
  freelance: 'Freelance',
  investimentos: 'Investimentos',
  outros: 'Outros',
}

export const categoryColors: Record<Category, string> = {
  alimentacao: '#ef4444',
  transporte: '#f97316',
  moradia: '#eab308',
  lazer: '#22c55e',
  saude: '#14b8a6',
  educacao: '#3b82f6',
  salario: '#8b5cf6',
  freelance: '#ec4899',
  investimentos: '#06b6d4',
  outros: '#6b7280',
}

export type AccountType = 'checking' | 'savings' | 'credit' | 'investment'

export interface Account {
  id: string
  name: string
  type: AccountType
  balance: number
  institution: string
  color: string
  lastUpdate: string
}

export const accountTypeLabels: Record<AccountType, string> = {
  checking: 'Conta Corrente',
  savings: 'Poupanca',
  credit: 'Cartao de Credito',
  investment: 'Investimento',
}

export type InvestmentType = 'cdb' | 'lci' | 'lca' | 'tesouro' | 'acoes' | 'fii' | 'crypto' | 'fundo'

export type InvestmentRisk = 'baixo' | 'medio' | 'alto'

export interface Investment {
  id: string
  name: string
  type: InvestmentType
  institution: string
  investedAmount: number
  currentValue: number
  profitability: number
  risk: InvestmentRisk
  dueDate?: string
  color: string
}

export interface InvestmentHistory {
  month: string
  value: number
}

export const investmentTypeLabels: Record<InvestmentType, string> = {
  cdb: 'CDB',
  lci: 'LCI',
  lca: 'LCA',
  tesouro: 'Tesouro Direto',
  acoes: 'Acoes',
  fii: 'Fundos Imobiliarios',
  crypto: 'Criptomoedas',
  fundo: 'Fundos de Investimento',
}

export const investmentRiskLabels: Record<InvestmentRisk, string> = {
  baixo: 'Baixo Risco',
  medio: 'Medio Risco',
  alto: 'Alto Risco',
}

export const investmentRiskColors: Record<InvestmentRisk, string> = {
  baixo: '#22c55e',
  medio: '#eab308',
  alto: '#ef4444',
}
