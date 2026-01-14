'use client'

import { Bell, Search, Moon, Sun } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/components/theme-provider'

interface HeaderProps {
  title: string
}

export function Header({ title }: HeaderProps) {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  const isDark = theme === 'dark' ||
    (theme === 'system' && typeof window !== 'undefined' &&
     window.matchMedia('(prefers-color-scheme: dark)').matches)

  return (
    <header className="hidden lg:flex sticky top-0 z-30 h-16 items-center justify-between border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-6">
      <div className="flex items-center gap-3">
        <div className="h-8 w-1 rounded-full bg-gradient-to-b from-primary to-purple-600" />
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary hover:bg-primary/10">
          <Search className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary hover:bg-primary/10 relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:text-primary hover:bg-primary/10"
          onClick={toggleTheme}
        >
          {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
        <div className="ml-2 h-8 w-px bg-border" />
        <Avatar className="h-9 w-9 ring-2 ring-primary/20">
          <AvatarImage src="/avatar.png" alt="Usuario" />
          <AvatarFallback className="bg-primary/10 text-primary font-semibold">LP</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
