import { Header } from '@/components/layout/header'
import { InvestmentsSummary } from '@/components/investments/investments-summary'
import { InvestmentCard } from '@/components/investments/investment-card'
import { InvestmentChart } from '@/components/investments/investment-chart'
import { RiskDistribution } from '@/components/investments/risk-distribution'
import { investments, investmentHistory, getInvestmentsSummary } from '@/data/mock-data'

export default function InvestmentsPage() {
  const summary = getInvestmentsSummary()

  return (
    <div className="min-h-screen">
      <Header title="Investimentos" />

      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
        <InvestmentsSummary
          totalInvested={summary.totalInvested}
          totalCurrent={summary.totalCurrent}
          totalProfit={summary.totalProfit}
          profitPercentage={summary.profitPercentage}
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <InvestmentChart data={investmentHistory} />
          </div>
          <RiskDistribution byRisk={summary.byRisk} />
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Meus Investimentos</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {investments.map((investment) => (
              <InvestmentCard key={investment.id} investment={investment} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
