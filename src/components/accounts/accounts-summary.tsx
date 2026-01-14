'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { formatCurrency, cn } from '@/lib/utils'
import {
  Wallet,
  PiggyBank,
  CreditCard,
  TrendingUp,
  DollarSign,
} from 'lucide-react'

interface AccountsSummaryProps {
  totalBalance: number
  totalChecking: number
  totalSavings: number
  totalCredit: number
  totalInvestments: number
}

export function AccountsSummary({
  totalBalance,
  totalChecking,
  totalSavings,
  totalCredit,
  totalInvestments,
}: AccountsSummaryProps) {
  const summaryItems = [
    {
      label: 'Patrimonio Total',
      value: totalBalance,
      icon: DollarSign,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      isPrimary: true,
    },
    {
      label: 'Contas Correntes',
      value: totalChecking,
      icon: Wallet,
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
      isPrimary: false,
    },
    {
      label: 'Poupanca',
      value: totalSavings,
      icon: PiggyBank,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10',
      isPrimary: false,
    },
    {
      label: 'Cartoes de Credito',
      value: totalCredit,
      icon: CreditCard,
      color: 'text-red-500',
      bgColor: 'bg-red-500/10',
      isPrimary: false,
    },
    {
      label: 'Investimentos',
      value: totalInvestments,
      icon: TrendingUp,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
      isPrimary: false,
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-5">
      {summaryItems.map((item) => (
        <Card
          key={item.label}
          className={cn(
            item.isPrimary && 'border-primary/50 bg-gradient-to-br from-primary/5 to-purple-600/5'
          )}
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs font-medium text-muted-foreground">
              {item.label}
            </CardTitle>
            <div className={cn('rounded-lg p-2', item.bgColor)}>
              <item.icon className={cn('h-4 w-4', item.color)} />
            </div>
          </CardHeader>
          <CardContent>
            <div
              className={cn(
                'text-xl font-bold',
                item.isPrimary && 'text-primary',
                item.value < 0 && !item.isPrimary ? 'text-red-500' : ''
              )}
            >
              {formatCurrency(item.value)}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
