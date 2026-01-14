import { Header } from '@/components/layout/header'
import { ProfileSettings } from '@/components/settings/profile-settings'
import { NotificationSettings } from '@/components/settings/notification-settings'
import { AppearanceSettings } from '@/components/settings/appearance-settings'
import { SecuritySettings } from '@/components/settings/security-settings'

export default function SettingsPage() {
  return (
    <div className="min-h-screen">
      <Header title="Configuracoes" />

      <div className="p-6 space-y-6 max-w-4xl">
        <ProfileSettings />
        <AppearanceSettings />
        <NotificationSettings />
        <SecuritySettings />
      </div>
    </div>
  )
}
