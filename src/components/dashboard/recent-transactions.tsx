'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { formatCurrency, formatDateShort, cn } from '@/lib/utils'
import { Transaction, categoryLabels, categoryColors } from '@/types/finance'
import {
  Utensils,
  Car,
  Home,
  Gamepad2,
  HeartPulse,
  GraduationCap,
  Briefcase,
  Laptop,
  TrendingUp,
  MoreHorizontal,
} from 'lucide-react'

const categoryIcons = {
  alimentacao: Utensils,
  transporte: Car,
  moradia: Home,
  lazer: Gamepad2,
  saude: HeartPulse,
  educacao: GraduationCap,
  salario: Briefcase,
  freelance: Laptop,
  investimentos: TrendingUp,
  outros: MoreHorizontal,
}

interface RecentTransactionsProps {
  transactions: Transaction[]
}

export function RecentTransactions({ transactions }: RecentTransactionsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Suas ultimas movimentacoes</CardTitle>
        <p className="text-sm text-muted-foreground">
          O que entrou e saiu recentemente
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => {
            const Icon = categoryIcons[transaction.category]
            const isIncome = transaction.type === 'income'

            return (
              <div
                key={transaction.id}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full"
                    style={{
                      backgroundColor: `${categoryColors[transaction.category]}20`,
                    }}
                  >
                    <Icon
                      className="h-5 w-5"
                      style={{ color: categoryColors[transaction.category] }}
                    />
                  </div>
                  <div>
                    <p className="font-medium">{transaction.description}</p>
                    <p className="text-xs text-muted-foreground">
                      {categoryLabels[transaction.category]} • {formatDateShort(transaction.date)}
                    </p>
                  </div>
                </div>
                <span
                  className={cn(
                    'font-semibold',
                    isIncome ? 'text-green-500' : 'text-red-500'
                  )}
                >
                  {isIncome ? '+' : '-'} {formatCurrency(transaction.amount)}
                </span>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
