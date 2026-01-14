'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
  LayoutDashboard,
  ArrowRightLeft,
  Wallet,
  TrendingUp,
  Settings,
  Sparkles,
} from 'lucide-react'

const menuItems = [
  { href: '/', label: 'Inicio', icon: LayoutDashboard },
  { href: '/transactions', label: 'Movimentacoes', icon: ArrowRightLeft },
  { href: '/accounts', label: 'Suas Contas', icon: Wallet },
  { href: '/investments', label: 'Investimentos', icon: TrendingUp },
  { href: '/settings', label: 'Preferencias', icon: Settings },
]

const tips = [
  "Guarda um pouquinho todo mes, ta?",
  "Investir e igual plantar: da frutos!",
  "Controlar gastos e o primeiro passo!",
  "Voce ta indo muito bem!",
  "Orgulho de voce por cuidar da grana!",
]

export function Sidebar() {
  const pathname = usePathname()
  const randomTip = tips[Math.floor(Math.random() * tips.length)]

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r bg-background">
      <div className="flex h-20 items-center border-b px-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative">
            <Image
              src="/ze-icon.svg"
              alt="Ze"
              width={48}
              height={48}
              className="rounded-xl shadow-lg shadow-primary/20"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Ze Finances
            </span>
            <span className="text-xs text-muted-foreground">Seu parceiro financeiro</span>
          </div>
        </Link>
      </div>

      <nav className="flex flex-col gap-1 p-4">
        {menuItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all',
                isActive
                  ? 'bg-primary text-primary-foreground shadow-md shadow-primary/25'
                  : 'text-muted-foreground hover:bg-primary/10 hover:text-primary'
              )}
            >
              <item.icon className={cn('h-5 w-5', isActive && 'text-primary-foreground')} />
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="absolute bottom-0 left-0 right-0 p-4 space-y-4">
        {/* Dica do Zé */}
        <div className="rounded-xl bg-gradient-to-br from-primary/10 to-purple-600/10 p-4 border border-primary/20">
          <div className="flex items-start gap-2">
            <Sparkles className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs font-medium text-primary">Dica do Ze</p>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                "{randomTip}"
              </p>
            </div>
          </div>
        </div>

        {/* Card Pro */}
        <div className="rounded-xl bg-gradient-to-br from-primary/20 to-purple-600/20 p-4 border border-primary/20">
          <p className="text-sm font-medium text-primary">Ze Pro</p>
          <p className="text-xs text-muted-foreground mt-1">
            Dicas personalizadas e muito mais!
          </p>
          <button className="mt-3 w-full rounded-lg bg-primary py-2 text-xs font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
            Quero conhecer
          </button>
        </div>
      </div>
    </aside>
  )
}
