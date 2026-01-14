'use client'

import { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { formatCurrency, formatDate, formatDateShort, cn } from '@/lib/utils'
import { Transaction, categoryLabels } from '@/types/finance'

interface TransactionsTableProps {
  transactions: Transaction[]
}

type FilterType = 'all' | 'income' | 'expense'

export function TransactionsTable({ transactions }: TransactionsTableProps) {
  const [filter, setFilter] = useState<FilterType>('all')

  const filteredTransactions = transactions.filter((t) => {
    if (filter === 'all') return true
    return t.type === filter
  })

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <Button
          variant={filter === 'all' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setFilter('all')}
        >
          Todas
        </Button>
        <Button
          variant={filter === 'income' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setFilter('income')}
        >
          Receitas
        </Button>
        <Button
          variant={filter === 'expense' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setFilter('expense')}
        >
          Despesas
        </Button>
      </div>

      {/* Mobile card view */}
      <div className="space-y-3 md:hidden">
        {filteredTransactions.map((transaction) => (
          <div
            key={transaction.id}
            className="rounded-lg border p-4 space-y-2"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate">{transaction.description}</p>
                <p className="text-xs text-muted-foreground">
                  {categoryLabels[transaction.category]} • {formatDateShort(transaction.date)}
                </p>
              </div>
              <span
                className={cn(
                  'font-semibold text-sm ml-2',
                  transaction.type === 'income' ? 'text-green-500' : 'text-red-500'
                )}
              >
                {transaction.type === 'income' ? '+' : '-'} {formatCurrency(transaction.amount)}
              </span>
            </div>
            <div className="flex gap-2">
              <Badge variant="secondary" className="text-xs">
                {categoryLabels[transaction.category]}
              </Badge>
              <Badge
                variant={transaction.type === 'income' ? 'default' : 'destructive'}
                className="text-xs"
              >
                {transaction.type === 'income' ? 'Receita' : 'Despesa'}
              </Badge>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop table view */}
      <div className="hidden md:block rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Descricao</TableHead>
              <TableHead>Categoria</TableHead>
              <TableHead>Data</TableHead>
              <TableHead>Tipo</TableHead>
              <TableHead className="text-right">Valor</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTransactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell className="font-medium">
                  {transaction.description}
                </TableCell>
                <TableCell>
                  <Badge variant="secondary">
                    {categoryLabels[transaction.category]}
                  </Badge>
                </TableCell>
                <TableCell>{formatDate(transaction.date)}</TableCell>
                <TableCell>
                  <Badge
                    variant={transaction.type === 'income' ? 'default' : 'destructive'}
                  >
                    {transaction.type === 'income' ? 'Receita' : 'Despesa'}
                  </Badge>
                </TableCell>
                <TableCell
                  className={cn(
                    'text-right font-semibold',
                    transaction.type === 'income'
                      ? 'text-green-500'
                      : 'text-red-500'
                  )}
                >
                  {transaction.type === 'income' ? '+' : '-'}{' '}
                  {formatCurrency(transaction.amount)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
