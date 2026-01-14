import { Transaction, MonthlyData, CategoryData, Account, Investment, InvestmentHistory } from '@/types/finance'

export const transactions: Transaction[] = [
  // Janeiro 2025
  { id: '1', description: 'Salario', amount: 8500, type: 'income', category: 'salario', date: '2025-01-05' },
  { id: '2', description: 'Aluguel', amount: 2200, type: 'expense', category: 'moradia', date: '2025-01-10' },
  { id: '3', description: 'Supermercado', amount: 850, type: 'expense', category: 'alimentacao', date: '2025-01-12' },
  { id: '4', description: 'Uber', amount: 120, type: 'expense', category: 'transporte', date: '2025-01-13' },
  { id: '5', description: 'Netflix', amount: 55, type: 'expense', category: 'lazer', date: '2025-01-15' },
  { id: '6', description: 'Freelance - Site', amount: 2500, type: 'income', category: 'freelance', date: '2025-01-18' },
  { id: '7', description: 'Farmacia', amount: 180, type: 'expense', category: 'saude', date: '2025-01-20' },
  { id: '8', description: 'Curso online', amount: 297, type: 'expense', category: 'educacao', date: '2025-01-22' },

  // Dezembro 2024
  { id: '9', description: 'Salario', amount: 8500, type: 'income', category: 'salario', date: '2024-12-05' },
  { id: '10', description: 'Aluguel', amount: 2200, type: 'expense', category: 'moradia', date: '2024-12-10' },
  { id: '11', description: 'Supermercado', amount: 920, type: 'expense', category: 'alimentacao', date: '2024-12-12' },
  { id: '12', description: 'Presente Natal', amount: 350, type: 'expense', category: 'outros', date: '2024-12-20' },
  { id: '13', description: 'Ceia de Natal', amount: 450, type: 'expense', category: 'alimentacao', date: '2024-12-24' },
  { id: '14', description: 'Bonus anual', amount: 4000, type: 'income', category: 'salario', date: '2024-12-28' },

  // Novembro 2024
  { id: '15', description: 'Salario', amount: 8500, type: 'income', category: 'salario', date: '2024-11-05' },
  { id: '16', description: 'Aluguel', amount: 2200, type: 'expense', category: 'moradia', date: '2024-11-10' },
  { id: '17', description: 'Supermercado', amount: 780, type: 'expense', category: 'alimentacao', date: '2024-11-12' },
  { id: '18', description: 'Gasolina', amount: 250, type: 'expense', category: 'transporte', date: '2024-11-15' },
  { id: '19', description: 'Plano de saude', amount: 450, type: 'expense', category: 'saude', date: '2024-11-18' },
  { id: '20', description: 'Freelance - App', amount: 3500, type: 'income', category: 'freelance', date: '2024-11-22' },

  // Outubro 2024
  { id: '21', description: 'Salario', amount: 8500, type: 'income', category: 'salario', date: '2024-10-05' },
  { id: '22', description: 'Aluguel', amount: 2200, type: 'expense', category: 'moradia', date: '2024-10-10' },
  { id: '23', description: 'Supermercado', amount: 720, type: 'expense', category: 'alimentacao', date: '2024-10-12' },
  { id: '24', description: 'Cinema', amount: 80, type: 'expense', category: 'lazer', date: '2024-10-18' },
  { id: '25', description: 'Livros', amount: 150, type: 'expense', category: 'educacao', date: '2024-10-20' },
  { id: '26', description: 'Investimento CDB', amount: 1000, type: 'expense', category: 'investimentos', date: '2024-10-25' },
  { id: '27', description: 'Rendimento investimento', amount: 180, type: 'income', category: 'investimentos', date: '2024-10-28' },

  // Setembro 2024
  { id: '28', description: 'Salario', amount: 8500, type: 'income', category: 'salario', date: '2024-09-05' },
  { id: '29', description: 'Aluguel', amount: 2200, type: 'expense', category: 'moradia', date: '2024-09-10' },
  { id: '30', description: 'Supermercado', amount: 690, type: 'expense', category: 'alimentacao', date: '2024-09-12' },
  { id: '31', description: 'Uber', amount: 180, type: 'expense', category: 'transporte', date: '2024-09-15' },
  { id: '32', description: 'Spotify', amount: 34, type: 'expense', category: 'lazer', date: '2024-09-18' },
  { id: '33', description: 'Dentista', amount: 320, type: 'expense', category: 'saude', date: '2024-09-22' },

  // Agosto 2024
  { id: '34', description: 'Salario', amount: 8500, type: 'income', category: 'salario', date: '2024-08-05' },
  { id: '35', description: 'Aluguel', amount: 2200, type: 'expense', category: 'moradia', date: '2024-08-10' },
  { id: '36', description: 'Supermercado', amount: 810, type: 'expense', category: 'alimentacao', date: '2024-08-12' },
  { id: '37', description: 'Viagem', amount: 1500, type: 'expense', category: 'lazer', date: '2024-08-15' },
  { id: '38', description: 'Freelance - Logo', amount: 800, type: 'income', category: 'freelance', date: '2024-08-20' },
  { id: '39', description: 'Conta de luz', amount: 180, type: 'expense', category: 'moradia', date: '2024-08-22' },
  { id: '40', description: 'Internet', amount: 120, type: 'expense', category: 'moradia', date: '2024-08-25' },
]

export const monthlyData: MonthlyData[] = [
  { month: 'Ago', income: 9300, expenses: 4810, balance: 4490 },
  { month: 'Set', income: 8500, expenses: 3424, balance: 5076 },
  { month: 'Out', income: 8680, expenses: 4150, balance: 4530 },
  { month: 'Nov', income: 12000, expenses: 3680, balance: 8320 },
  { month: 'Dez', income: 12500, expenses: 3920, balance: 8580 },
  { month: 'Jan', income: 11000, expenses: 3702, balance: 7298 },
]

export const expensesByCategory: CategoryData[] = [
  { category: 'moradia', amount: 2500, color: '#eab308' },
  { category: 'alimentacao', amount: 850, color: '#ef4444' },
  { category: 'transporte', amount: 120, color: '#f97316' },
  { category: 'saude', amount: 180, color: '#14b8a6' },
  { category: 'educacao', amount: 297, color: '#3b82f6' },
  { category: 'lazer', amount: 55, color: '#22c55e' },
]

export const getSummary = () => {
  const currentMonth = transactions.filter(t => t.date.startsWith('2025-01'))
  const lastMonth = transactions.filter(t => t.date.startsWith('2024-12'))

  const currentIncome = currentMonth.filter(t => t.type === 'income').reduce((acc, t) => acc + t.amount, 0)
  const currentExpenses = currentMonth.filter(t => t.type === 'expense').reduce((acc, t) => acc + t.amount, 0)
  const lastIncome = lastMonth.filter(t => t.type === 'income').reduce((acc, t) => acc + t.amount, 0)
  const lastExpenses = lastMonth.filter(t => t.type === 'expense').reduce((acc, t) => acc + t.amount, 0)

  const totalBalance = transactions.reduce((acc, t) => {
    return t.type === 'income' ? acc + t.amount : acc - t.amount
  }, 0)

  return {
    balance: totalBalance,
    income: currentIncome,
    expenses: currentExpenses,
    incomeChange: lastIncome > 0 ? ((currentIncome - lastIncome) / lastIncome) * 100 : 0,
    expensesChange: lastExpenses > 0 ? ((currentExpenses - lastExpenses) / lastExpenses) * 100 : 0,
  }
}

export const getRecentTransactions = (limit: number = 5): Transaction[] => {
  return [...transactions]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit)
}

export const getTransactionById = (id: string): Transaction | undefined => {
  return transactions.find(t => t.id === id)
}

export const accounts: Account[] = [
  {
    id: '1',
    name: 'Conta Principal',
    type: 'checking',
    balance: 12450.00,
    institution: 'Nubank',
    color: '#8b5cf6',
    lastUpdate: '2025-01-13',
  },
  {
    id: '2',
    name: 'Poupanca',
    type: 'savings',
    balance: 25000.00,
    institution: 'Banco do Brasil',
    color: '#eab308',
    lastUpdate: '2025-01-12',
  },
  {
    id: '3',
    name: 'Cartao Platinum',
    type: 'credit',
    balance: -2350.00,
    institution: 'Itau',
    color: '#ef4444',
    lastUpdate: '2025-01-13',
  },
  {
    id: '4',
    name: 'CDB Liquidez Diaria',
    type: 'investment',
    balance: 15000.00,
    institution: 'XP Investimentos',
    color: '#22c55e',
    lastUpdate: '2025-01-10',
  },
  {
    id: '5',
    name: 'Conta Salario',
    type: 'checking',
    balance: 850.00,
    institution: 'Santander',
    color: '#ef4444',
    lastUpdate: '2025-01-05',
  },
  {
    id: '6',
    name: 'Tesouro Direto',
    type: 'investment',
    balance: 8500.00,
    institution: 'Rico',
    color: '#06b6d4',
    lastUpdate: '2025-01-08',
  },
]

export const getAccountsSummary = () => {
  const totalBalance = accounts.reduce((acc, account) => acc + account.balance, 0)
  const totalChecking = accounts
    .filter(a => a.type === 'checking')
    .reduce((acc, a) => acc + a.balance, 0)
  const totalSavings = accounts
    .filter(a => a.type === 'savings')
    .reduce((acc, a) => acc + a.balance, 0)
  const totalCredit = accounts
    .filter(a => a.type === 'credit')
    .reduce((acc, a) => acc + a.balance, 0)
  const totalInvestments = accounts
    .filter(a => a.type === 'investment')
    .reduce((acc, a) => acc + a.balance, 0)

  return {
    totalBalance,
    totalChecking,
    totalSavings,
    totalCredit,
    totalInvestments,
  }
}

export const investments: Investment[] = [
  {
    id: '1',
    name: 'CDB Liquidez Diaria',
    type: 'cdb',
    institution: 'Nubank',
    investedAmount: 10000,
    currentValue: 10850,
    profitability: 8.5,
    risk: 'baixo',
    color: '#8b5cf6',
  },
  {
    id: '2',
    name: 'Tesouro Selic 2029',
    type: 'tesouro',
    institution: 'Tesouro Direto',
    investedAmount: 15000,
    currentValue: 16200,
    profitability: 8.0,
    risk: 'baixo',
    dueDate: '2029-03-01',
    color: '#22c55e',
  },
  {
    id: '3',
    name: 'LCI Banco Inter',
    type: 'lci',
    institution: 'Banco Inter',
    investedAmount: 8000,
    currentValue: 8640,
    profitability: 8.0,
    risk: 'baixo',
    dueDate: '2025-06-15',
    color: '#06b6d4',
  },
  {
    id: '4',
    name: 'PETR4',
    type: 'acoes',
    institution: 'Clear',
    investedAmount: 5000,
    currentValue: 6250,
    profitability: 25.0,
    risk: 'alto',
    color: '#eab308',
  },
  {
    id: '5',
    name: 'HGLG11',
    type: 'fii',
    institution: 'XP Investimentos',
    investedAmount: 12000,
    currentValue: 12960,
    profitability: 8.0,
    risk: 'medio',
    color: '#f97316',
  },
  {
    id: '6',
    name: 'Bitcoin',
    type: 'crypto',
    institution: 'Binance',
    investedAmount: 3000,
    currentValue: 4500,
    profitability: 50.0,
    risk: 'alto',
    color: '#f59e0b',
  },
  {
    id: '7',
    name: 'Fundo Multimercado',
    type: 'fundo',
    institution: 'BTG Pactual',
    investedAmount: 20000,
    currentValue: 21800,
    profitability: 9.0,
    risk: 'medio',
    color: '#3b82f6',
  },
]

export const investmentHistory: InvestmentHistory[] = [
  { month: 'Ago', value: 58000 },
  { month: 'Set', value: 61500 },
  { month: 'Out', value: 64200 },
  { month: 'Nov', value: 68000 },
  { month: 'Dez', value: 72500 },
  { month: 'Jan', value: 81200 },
]

export const getInvestmentsSummary = () => {
  const totalInvested = investments.reduce((acc, inv) => acc + inv.investedAmount, 0)
  const totalCurrent = investments.reduce((acc, inv) => acc + inv.currentValue, 0)
  const totalProfit = totalCurrent - totalInvested
  const profitPercentage = (totalProfit / totalInvested) * 100

  const byRisk = {
    baixo: investments.filter(i => i.risk === 'baixo').reduce((acc, i) => acc + i.currentValue, 0),
    medio: investments.filter(i => i.risk === 'medio').reduce((acc, i) => acc + i.currentValue, 0),
    alto: investments.filter(i => i.risk === 'alto').reduce((acc, i) => acc + i.currentValue, 0),
  }

  return {
    totalInvested,
    totalCurrent,
    totalProfit,
    profitPercentage,
    byRisk,
  }
}
