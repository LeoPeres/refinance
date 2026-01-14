'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { formatCurrency, formatDate, cn } from '@/lib/utils'
import {
  Investment,
  investmentTypeLabels,
  investmentRiskLabels,
  investmentRiskColors,
} from '@/types/finance'
import { TrendingUp, TrendingDown, Calendar } from 'lucide-react'

interface InvestmentCardProps {
  investment: Investment
}

export function InvestmentCard({ investment }: InvestmentCardProps) {
  const profit = investment.currentValue - investment.investedAmount
  const isPositive = profit >= 0

  return (
    <Card className="overflow-hidden">
      <div
        className="h-2"
        style={{ backgroundColor: investment.color }}
      />
      <CardContent className="pt-4">
        <div className="flex items-start justify-between">
          <div>
            <p className="font-semibold">{investment.name}</p>
            <p className="text-sm text-muted-foreground">{investment.institution}</p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <Badge variant="secondary">
              {investmentTypeLabels[investment.type]}
            </Badge>
            <Badge
              style={{
                backgroundColor: `${investmentRiskColors[investment.risk]}20`,
                color: investmentRiskColors[investment.risk],
              }}
            >
              {investmentRiskLabels[investment.risk]}
            </Badge>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-muted-foreground">Valor Investido</p>
            <p className="font-medium">{formatCurrency(investment.investedAmount)}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Valor Atual</p>
            <p className="font-medium">{formatCurrency(investment.currentValue)}</p>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-1">
            {isPositive ? (
              <TrendingUp className="h-4 w-4 text-green-500" />
            ) : (
              <TrendingDown className="h-4 w-4 text-red-500" />
            )}
            <span
              className={cn(
                'text-sm font-semibold',
                isPositive ? 'text-green-500' : 'text-red-500'
              )}
            >
              {isPositive ? '+' : ''}{investment.profitability.toFixed(1)}%
            </span>
          </div>

          {investment.dueDate && (
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="h-3 w-3" />
              <span>Venc. {formatDate(investment.dueDate)}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
