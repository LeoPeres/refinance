'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { formatCurrency } from '@/lib/utils'
import { TrendingDown, TrendingUp, Wallet, ArrowUpRight, ArrowDownRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SummaryCardsProps {
  balance: number
  income: number
  expenses: number
  incomeChange: number
  expensesChange: number
}

export function SummaryCards({
  balance,
  income,
  expenses,
  incomeChange,
  expensesChange,
}: SummaryCardsProps) {
  const cards = [
    {
      title: 'Seu saldo atual',
      subtitle: 'Esse e o seu patrimonio liquido',
      value: balance,
      icon: Wallet,
      change: null,
      iconColor: 'text-primary',
      bgColor: 'bg-primary/10',
      isPrimary: true,
    },
    {
      title: 'Entrou na conta',
      subtitle: 'Receitas deste mes',
      value: income,
      icon: TrendingUp,
      change: incomeChange,
      iconColor: 'text-green-500',
      bgColor: 'bg-green-500/10',
      isPrimary: false,
    },
    {
      title: 'Voce gastou',
      subtitle: 'Despesas deste mes',
      value: expenses,
      icon: TrendingDown,
      change: expensesChange,
      iconColor: 'text-red-500',
      bgColor: 'bg-red-500/10',
      invertChange: true,
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
            <div>
              <CardTitle className="text-sm font-medium">
                {card.title}
              </CardTitle>
              <p className="text-xs text-muted-foreground">{card.subtitle}</p>
            </div>
            <div className={cn('rounded-lg p-2', card.bgColor)}>
              <card.icon className={cn('h-4 w-4', card.iconColor)} />
            </div>
          </CardHeader>
          <CardContent>
            <div className={cn(
              'text-2xl font-bold',
              card.isPrimary && 'text-primary'
            )}>
              {formatCurrency(card.value)}
            </div>
            {card.change !== null && (
              <div className="mt-1 flex items-center text-xs">
                {(card.invertChange ? card.change > 0 : card.change > 0) ? (
                  <>
                    <ArrowUpRight className={cn('h-3 w-3', card.invertChange ? 'text-red-500' : 'text-green-500')} />
                    <span className={cn(card.invertChange ? 'text-red-500' : 'text-green-500')}>
                      +{Math.abs(card.change).toFixed(1)}%
                    </span>
                  </>
                ) : (
                  <>
                    <ArrowDownRight className={cn('h-3 w-3', card.invertChange ? 'text-green-500' : 'text-red-500')} />
                    <span className={cn(card.invertChange ? 'text-green-500' : 'text-red-500')}>
                      {card.change.toFixed(1)}%
                    </span>
                  </>
                )}
                <span className="ml-1 text-muted-foreground">comparado ao mes passado</span>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
