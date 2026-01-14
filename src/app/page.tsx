import { Header } from '@/components/layout/header'
import { ZeGreeting } from '@/components/dashboard/ze-greeting'
import { SummaryCards } from '@/components/dashboard/summary-cards'
import { BalanceChart } from '@/components/dashboard/balance-chart'
import { ExpensesChart } from '@/components/dashboard/expenses-chart'
import { RecentTransactions } from '@/components/dashboard/recent-transactions'
import {
  getSummary,
  getRecentTransactions,
  monthlyData,
  expensesByCategory,
} from '@/data/mock-data'

export default function Dashboard() {
  const summary = getSummary()
  const recentTransactions = getRecentTransactions(5)

  return (
    <div className="min-h-screen">
      <Header title="Inicio" />

      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
        <ZeGreeting balance={summary.balance} userName="Leonardo" />

        <SummaryCards
          balance={summary.balance}
          income={summary.income}
          expenses={summary.expenses}
          incomeChange={summary.incomeChange}
          expensesChange={summary.expensesChange}
        />

        <div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
          <BalanceChart data={monthlyData} />
          <ExpensesChart data={expensesByCategory} />
        </div>

        <div className="grid gap-4 sm:gap-6">
          <RecentTransactions transactions={recentTransactions} />
        </div>
      </div>
    </div>
  )
}
