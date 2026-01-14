import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Header } from '@/components/layout/header'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { getTransactionById } from '@/data/mock-data'
import { categoryLabels, categoryColors } from '@/types/finance'
import { formatCurrency, formatDate } from '@/lib/utils'
import {
  ArrowLeft,
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
  Calendar,
  Tag,
  FileText,
  Wallet,
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

interface TransactionDetailsPageProps {
  params: Promise<{ id: string }>
}

export default async function TransactionDetailsPage({ params }: TransactionDetailsPageProps) {
  const { id } = await params
  const transaction = getTransactionById(id)

  if (!transaction) {
    notFound()
  }

  const Icon = categoryIcons[transaction.category]
  const isIncome = transaction.type === 'income'
  const categoryColor = categoryColors[transaction.category]

  return (
    <div className="min-h-screen">
      <Header title="Detalhes da Transacao" />

      <div className="p-4 sm:p-6 space-y-6">
        <Link href="/transactions">
          <Button variant="ghost" size="sm" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Voltar para transacoes
          </Button>
        </Link>

        <Card>
          <CardHeader className="pb-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-full"
                  style={{ backgroundColor: `${categoryColor}20` }}
                >
                  <Icon
                    className="h-7 w-7"
                    style={{ color: categoryColor }}
                  />
                </div>
                <div>
                  <CardTitle className="text-xl">{transaction.description}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">
                    ID: #{transaction.id}
                  </p>
                </div>
              </div>
              <Badge
                variant={isIncome ? 'default' : 'destructive'}
                className="text-sm px-3 py-1"
              >
                {isIncome ? 'Receita' : 'Despesa'}
              </Badge>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="flex items-center justify-center py-6 rounded-lg bg-muted/50">
              <span
                className={`text-4xl font-bold ${isIncome ? 'text-green-500' : 'text-red-500'}`}
              >
                {isIncome ? '+' : '-'} {formatCurrency(transaction.amount)}
              </span>
            </div>

            <Separator />

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3 p-4 rounded-lg border">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Data</p>
                  <p className="font-medium">{formatDate(transaction.date)}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg border">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Tag className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Categoria</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="secondary">
                      {categoryLabels[transaction.category]}
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg border">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Wallet className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Tipo</p>
                  <p className="font-medium">{isIncome ? 'Entrada' : 'Saida'}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg border">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Descricao</p>
                  <p className="font-medium">{transaction.description}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
