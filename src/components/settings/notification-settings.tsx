'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

export function NotificationSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notificacoes</CardTitle>
        <CardDescription>
          Configure como voce deseja receber alertas
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>Notificacoes por email</Label>
            <p className="text-sm text-muted-foreground">
              Receba resumos e alertas por email
            </p>
          </div>
          <Switch defaultChecked />
        </div>

        <Separator />

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>Notificacoes push</Label>
            <p className="text-sm text-muted-foreground">
              Receba notificacoes no navegador
            </p>
          </div>
          <Switch defaultChecked />
        </div>

        <Separator />

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>Alerta de gastos</Label>
            <p className="text-sm text-muted-foreground">
              Seja avisado quando ultrapassar limites
            </p>
          </div>
          <Switch defaultChecked />
        </div>

        <Separator />

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>Resumo semanal</Label>
            <p className="text-sm text-muted-foreground">
              Receba um resumo semanal das suas financas
            </p>
          </div>
          <Switch />
        </div>

        <Separator />

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>Vencimento de contas</Label>
            <p className="text-sm text-muted-foreground">
              Lembrete de contas proximas do vencimento
            </p>
          </div>
          <Switch defaultChecked />
        </div>
      </CardContent>
    </Card>
  )
}
