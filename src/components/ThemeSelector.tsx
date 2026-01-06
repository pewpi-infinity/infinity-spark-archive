import { WebsiteTheme } from '@/lib/types'
import { THEME_OPTIONS } from '@/lib/generators'
import { Card } from '@/components/ui/card'
import { Check } from '@phosphor-icons/react'

interface ThemeSelectorProps {
  selectedTheme: WebsiteTheme
  onSelectTheme: (theme: WebsiteTheme) => void
}

export function ThemeSelector({ selectedTheme, onSelectTheme }: ThemeSelectorProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-foreground">Choose a Theme</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {THEME_OPTIONS.map((theme) => (
          <Card
            key={theme.value}
            className={`
              cosmic-border cursor-pointer transition-all duration-300 hover:scale-105
              ${selectedTheme === theme.value 
                ? 'bg-accent/20 border-accent ring-2 ring-accent' 
                : 'bg-card/50 hover:bg-card/80'
              }
            `}
            onClick={() => onSelectTheme(theme.value)}
          >
            <div className="p-4 text-center space-y-2">
              <div className="relative">
                <div className={`w-full h-20 rounded-md ${getThemePreview(theme.value)}`} />
                {selectedTheme === theme.value && (
                  <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground rounded-full p-1">
                    <Check size={16} weight="bold" />
                  </div>
                )}
              </div>
              <div>
                <div className="font-semibold text-sm">{theme.label}</div>
                <div className="text-xs text-muted-foreground">{theme.description}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

function getThemePreview(theme: WebsiteTheme): string {
  const previews = {
    cosmic: 'bg-gradient-to-br from-[oklch(0.12_0_0)] via-[oklch(0.25_0.08_270)] to-[oklch(0.35_0.15_290)]',
    minimal: 'bg-gradient-to-br from-white to-gray-100 border border-gray-300',
    editorial: 'bg-gradient-to-br from-amber-50 via-white to-amber-100',
    technical: 'bg-gradient-to-br from-gray-900 via-green-950 to-gray-900',
    vibrant: 'bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500'
  }
  return previews[theme] || previews.cosmic
}
