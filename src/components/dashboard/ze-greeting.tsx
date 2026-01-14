'use client'

import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { formatCurrency } from '@/lib/utils'
import { Sparkles } from 'lucide-react'

interface ZeGreetingProps {
  balance: number
  userName?: string
}

function getGreeting(): string {
  const hour = new Date().getHours()
  if (hour < 12) return 'Bom dia'
  if (hour < 18) return 'Boa tarde'
  return 'Boa noite'
}

function getBalanceMessage(balance: number): string {
  if (balance > 50000) {
    return "Caramba! Voce ta mandando muito bem! Seu patrimonio ta crescendo bonito. Continua assim que o sucesso e garantido!"
  } else if (balance > 20000) {
    return "Olha so, ta indo muito bem! Seu saldo ta saudavel e voce ta no caminho certo. Bora manter esse ritmo?"
  } else if (balance > 5000) {
    return "Legal ver voce cuidando da grana! Ta construindo uma base solida. Que tal pensar em investir um pouquinho?"
  } else if (balance > 0) {
    return "Ei, o importante e comecar! Todo patrimonio grande comecou pequeno. Vamos juntos nessa jornada?"
  } else {
    return "Relaxa, vamos resolver isso juntos! O primeiro passo e entender pra onde ta indo o dinheiro. Bora analisar?"
  }
}

export function ZeGreeting({ balance, userName = 'Leonardo' }: ZeGreetingProps) {
  const greeting = getGreeting()
  const message = getBalanceMessage(balance)

  return (
    <Card className="border-primary/20 bg-gradient-to-r from-primary/5 via-purple-600/5 to-primary/5">
      <CardContent className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <div className="relative flex-shrink-0">
            <Image
              src="/ze-icon.svg"
              alt="Ze"
              width={64}
              height={64}
              className="rounded-2xl shadow-lg shadow-primary/20"
            />
            <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
              <Sparkles className="h-3 w-3 text-white" />
            </div>
          </div>

          <div className="flex-1 min-w-0 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
              <h2 className="text-lg sm:text-xl font-bold">
                {greeting}, {userName}!
              </h2>
              <span className="text-xl sm:text-2xl">👋</span>
            </div>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {message}
            </p>

            <div className="mt-3 sm:mt-4 flex items-center justify-center sm:justify-start gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10">
                <span className="text-xs text-muted-foreground">Seu patrimonio:</span>
                <span className="text-sm font-bold text-primary">{formatCurrency(balance)}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
