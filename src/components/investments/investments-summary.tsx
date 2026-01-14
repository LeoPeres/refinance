'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { formatCurrency, cn } from '@/lib/utils'
import { TrendingUp, TrendingDown, Wallet, PiggyBank } from 'lucide-react'

interface InvestmentsSummaryProps {
  totalInvested: number
  totalCurrent: number
  totalProfit: number
  profitPercentage: number
}

export function InvestmentsSummary({
  totalInvested,
  totalCurrent,
  totalProfit,
  profitPercentage,
}: InvestmentsSummaryProps) {
  const isPositive = totalProfit >= 0

  const cards = [
    {
      title: 'Total Investido',
      value: totalInvested,
      icon: Wallet,
      color: 'text-muted-foreground',
      bgColor: 'bg-muted',
      isPrimary: false,
    },
    {
      title: 'Valor Atual',
      value: totalCurrent,
      icon: PiggyBank,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      isPrimary: true,
    },
    {
      title: 'Lucro/Prejuizo',
      value: totalProfit,
      icon: isPositive ? TrendingUp : TrendingDown,
      color: isPositive ? 'text-green-500' : 'text-red-500',
      bgColor: isPositive ? 'bg-green-500/10' : 'bg-red-500/10',
      showPercentage: true,
      percentage: profitPercentage,
      isPrimary: false,
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {cards.map((card) => (
        <Card
          key={card.title}
          className={cn(
            card.isPrimary && 'border-primary/50 bg-gradient-to-br from-primary/5 to-purple-600/5'
          )}
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {card.title}
            </CardTitle>
            <div className={cn('rounded-lg p-2', card.bgColor)}>
              <card.icon className={cn('h-4 w-4', card.color)} />
            </div>
          </CardHeader>
          <CardContent>
            <div
              className={cn(
                'text-2xl font-bold',
                card.isPrimary && 'text-primary',
                card.title === 'Lucro/Prejuizo' && (isPositive ? 'text-green-500' : 'text-red-500')
              )}
            >
              {card.title === 'Lucro/Prejuizo' && isPositive && '+'}
              {formatCurrency(card.value)}
            </div>
            {card.showPercentage && (
              <p className={cn('text-sm', isPositive ? 'text-green-500' : 'text-red-500')}>
                {isPositive ? '+' : ''}{card.percentage.toFixed(2)}% de rentabilidade
              </p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
