'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { formatCurrency } from '@/lib/utils'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { CategoryData, categoryLabels } from '@/types/finance'

interface ExpensesChartProps {
  data: CategoryData[]
}

export function ExpensesChart({ data }: ExpensesChartProps) {
  const total = data.reduce((acc, item) => acc + item.amount, 0)

  const chartData = data.map((item) => ({
    name: categoryLabels[item.category],
    value: item.amount,
    color: item.color,
    category: item.category,
  }))

  return (
    <Card>
      <CardHeader>
        <CardTitle>Pra onde foi seu dinheiro</CardTitle>
        <p className="text-sm text-muted-foreground">
          Veja como voce dividiu os gastos
        </p>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {chartData.map((entry, index) => (
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

        <div className="mt-4 grid grid-cols-2 gap-2">
          {data.map((item) => (
            <div key={item.category} className="flex items-center gap-2">
              <div
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-xs text-muted-foreground">
                {categoryLabels[item.category]}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
