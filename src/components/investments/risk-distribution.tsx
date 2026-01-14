'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { formatCurrency } from '@/lib/utils'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { investmentRiskLabels, investmentRiskColors, InvestmentRisk } from '@/types/finance'

interface RiskDistributionProps {
  byRisk: Record<InvestmentRisk, number>
}

export function RiskDistribution({ byRisk }: RiskDistributionProps) {
  const data = [
    { name: investmentRiskLabels.baixo, value: byRisk.baixo, color: investmentRiskColors.baixo },
    { name: investmentRiskLabels.medio, value: byRisk.medio, color: investmentRiskColors.medio },
    { name: investmentRiskLabels.alto, value: byRisk.alto, color: investmentRiskColors.alto },
  ].filter(item => item.value > 0)

  const total = data.reduce((acc, item) => acc + item.value, 0)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Distribuicao por Risco</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const item = payload[0].payload as { name: string; value: number }
                    const percentage = ((item.value / total) * 100).toFixed(1)
                    return (
                      <div className="rounded-lg border bg-background p-3 shadow-lg">
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {formatCurrency(item.value)} ({percentage}%)
                        </p>
                      </div>
                    )
                  }
                  return null
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 space-y-2">
          {data.map((item) => {
            const percentage = ((item.value / total) * 100).toFixed(1)
            return (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm">{item.name}</span>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">{formatCurrency(item.value)}</p>
                  <p className="text-xs text-muted-foreground">{percentage}%</p>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
