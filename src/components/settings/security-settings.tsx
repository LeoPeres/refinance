'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Shield, Smartphone, Key } from 'lucide-react'

export function SecuritySettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Seguranca</CardTitle>
        <CardDescription>
          Gerencie a seguranca da sua conta
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10">
              <Shield className="h-5 w-5 text-green-500" />
            </div>
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <Label>Autenticacao de dois fatores</Label>
                <Badge variant="secondary" className="text-green-500">
                  Ativo
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Proteja sua conta com uma camada extra de seguranca
              </p>
            </div>
          </div>
          <Switch defaultChecked />
        </div>

        <Separator />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10">
              <Smartphone className="h-5 w-5 text-blue-500" />
            </div>
            <div className="space-y-0.5">
              <Label>Notificacao de login</Label>
              <p className="text-sm text-muted-foreground">
                Receba alertas quando houver login em novo dispositivo
              </p>
            </div>
          </div>
          <Switch defaultChecked />
        </div>

        <Separator />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/10">
              <Key className="h-5 w-5 text-purple-500" />
            </div>
            <div className="space-y-0.5">
              <Label>Alterar senha</Label>
              <p className="text-sm text-muted-foreground">
                Ultima alteracao: ha 3 meses
              </p>
            </div>
          </div>
          <Button variant="outline">Alterar</Button>
        </div>

        <Separator />

        <div className="rounded-lg border border-destructive/50 bg-destructive/5 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-destructive">Excluir conta</p>
              <p className="text-sm text-muted-foreground">
                Esta acao e irreversivel. Todos os dados serao perdidos.
              </p>
            </div>
            <Button variant="destructive">Excluir</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
