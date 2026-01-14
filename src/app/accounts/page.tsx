import { Header } from '@/components/layout/header'
import { AccountCard } from '@/components/accounts/account-card'
import { AccountsSummary } from '@/components/accounts/accounts-summary'
import { accounts, getAccountsSummary } from '@/data/mock-data'

export default function AccountsPage() {
  const summary = getAccountsSummary()

  return (
    <div className="min-h-screen">
      <Header title="Contas" />

      <div className="p-6 space-y-6">
        <AccountsSummary
          totalBalance={summary.totalBalance}
          totalChecking={summary.totalChecking}
          totalSavings={summary.totalSavings}
          totalCredit={summary.totalCredit}
          totalInvestments={summary.totalInvestments}
        />

        <div>
          <h2 className="text-lg font-semibold mb-4">Minhas Contas</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {accounts.map((account) => (
              <AccountCard key={account.id} account={account} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
