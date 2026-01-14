'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { formatCurrency, formatDate, cn } from '@/lib/utils'
import { Account, accountTypeLabels } from '@/types/finance'
import {
  Wallet,
  PiggyBank,
  CreditCard,
  TrendingUp,
} from 'lucide-react'

const accountTypeIcons = {
  checking: Wallet,
  savings: PiggyBank,
  credit: CreditCard,
  investment: TrendingUp,
}

interface AccountCardProps {
  account: Account
}

export function AccountCard({ account }: AccountCardProps) {
  const Icon = accountTypeIcons[account.type]
  const isNegative = account.balance < 0

  return (
    <Card className="overflow-hidden">
      <div
        className="h-2"
        style={{ backgroundColor: account.color }}
      />
      <CardContent className="pt-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-full"
              style={{ backgroundColor: `${account.color}20` }}
            >
              <Icon
                className="h-5 w-5"
                style={{ color: account.color }}
              />
            </div>
            <div>
              <p className="font-semibold">{account.name}</p>
              <p className="text-sm text-muted-foreground">{account.institution}</p>
            </div>
          </div>
          <Badge variant="secondary">
            {accountTypeLabels[account.type]}
          </Badge>
        </div>

        <div className="mt-4">
          <p className="text-sm text-muted-foreground">Saldo atual</p>
          <p
            className={cn(
              'text-2xl font-bold',
              isNegative ? 'text-red-500' : 'text-foreground'
            )}
          >
            {formatCurrency(account.balance)}
          </p>
        </div>

        <p className="mt-3 text-xs text-muted-foreground">
          Atualizado em {formatDate(account.lastUpdate)}
        </p>
      </CardContent>
    </Card>
  )
}
