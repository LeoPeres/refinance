'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
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
import { ChevronRight } from 'lucide-react'

interface TransactionsTableProps {
  transactions: Transaction[]
}

type FilterType = 'all' | 'income' | 'expense'

export function TransactionsTable({ transactions }: TransactionsTableProps) {
  const [filter, setFilter] = useState<FilterType>('all')
  const router = useRouter()

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
          <Link
            key={transaction.id}
            href={`/transactions/${transaction.id}`}
            className="block rounded-lg border p-4 space-y-2 hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate">{transaction.description}</p>
                <p className="text-xs text-muted-foreground">
                  {categoryLabels[transaction.category]} • {formatDateShort(transaction.date)}
                </p>
              </div>
              <div className="flex items-center gap-2 ml-2">
                <span
                  className={cn(
                    'font-semibold text-sm',
                    transaction.type === 'income' ? 'text-green-500' : 'text-red-500'
                  )}
                >
                  {transaction.type === 'income' ? '+' : '-'} {formatCurrency(transaction.amount)}
                </span>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </div>
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
          </Link>
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
              <TableHead className="w-10"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTransactions.map((transaction) => (
              <TableRow
                key={transaction.id}
                className="cursor-pointer hover:bg-muted/50"
                onClick={() => router.push(`/transactions/${transaction.id}`)}
              >
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
                <TableCell>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
