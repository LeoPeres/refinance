'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { Monitor, Moon, Sun } from 'lucide-react'
import { useTheme } from '@/components/theme-provider'

type Theme = 'light' | 'dark' | 'system'

export function AppearanceSettings() {
  const { theme, setTheme } = useTheme()

  const themes = [
    {
      value: 'light' as Theme,
      label: 'Claro',
      icon: Sun,
    },
    {
      value: 'dark' as Theme,
      label: 'Escuro',
      icon: Moon,
    },
    {
      value: 'system' as Theme,
      label: 'Sistema',
      icon: Monitor,
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Aparencia</CardTitle>
        <CardDescription>
          Personalize a aparencia do aplicativo
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label>Tema</Label>
          <div className="grid grid-cols-3 gap-4">
            {themes.map((t) => (
              <button
                key={t.value}
                onClick={() => setTheme(t.value)}
                className={cn(
                  'flex flex-col items-center gap-2 rounded-lg border-2 p-4 transition-colors',
                  theme === t.value
                    ? 'border-primary bg-primary/5'
                    : 'border-muted hover:border-muted-foreground/50'
                )}
              >
                <t.icon className={cn(
                  'h-6 w-6',
                  theme === t.value ? 'text-primary' : 'text-muted-foreground'
                )} />
                <span className={cn(
                  'text-sm font-medium',
                  theme === t.value ? 'text-primary' : 'text-muted-foreground'
                )}>
                  {t.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label>Moeda padrao</Label>
          <div className="grid grid-cols-3 gap-4">
            {['BRL', 'USD', 'EUR'].map((currency) => (
              <button
                key={currency}
                className={cn(
                  'rounded-lg border-2 p-3 text-sm font-medium transition-colors',
                  currency === 'BRL'
                    ? 'border-primary bg-primary/5 text-primary'
                    : 'border-muted text-muted-foreground hover:border-muted-foreground/50'
                )}
              >
                {currency === 'BRL' && 'R$ Real'}
                {currency === 'USD' && '$ Dolar'}
                {currency === 'EUR' && '€ Euro'}
              </button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
