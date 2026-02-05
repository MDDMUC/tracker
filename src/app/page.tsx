import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold mb-2">Tracker</h1>
          <p className="text-muted-foreground">shadcn/ui components with Stone + Amber dark theme</p>
        </div>

        {/* Button Examples */}
        <Card>
          <CardHeader>
            <CardTitle>Button Components</CardTitle>
            <CardDescription>All button variants</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">Default</p>
              <Button>Default Button</Button>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">Secondary</p>
              <Button variant="secondary">Secondary Button</Button>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">Outline</p>
              <Button variant="outline">Outline Button</Button>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">Destructive</p>
              <Button variant="destructive">Destructive Button</Button>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">Ghost</p>
              <Button variant="ghost">Ghost Button</Button>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">Link</p>
              <Button variant="link">Link Button</Button>
            </div>
          </CardContent>
        </Card>

        {/* Card Examples */}
        <Card>
          <CardHeader>
            <CardTitle>Card Component</CardTitle>
            <CardDescription>A clean card with proper styling</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border border-border rounded-md">
                <h3 className="font-semibold mb-2">Feature 1</h3>
                <p className="text-sm text-muted-foreground">This demonstrates the card styling with borders and proper spacing.</p>
              </div>
              <div className="p-4 border border-border rounded-md">
                <h3 className="font-semibold mb-2">Feature 2</h3>
                <p className="text-sm text-muted-foreground">All components use the Stone + Amber color palette defined in the CSS variables.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Color Palette */}
        <Card>
          <CardHeader>
            <CardTitle>Color Palette</CardTitle>
            <CardDescription>Stone + Amber Dark Theme</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <div className="w-full h-24 bg-primary rounded-md mb-2" />
                <p className="text-xs font-semibold">Primary (Amber)</p>
              </div>
              <div>
                <div className="w-full h-24 bg-secondary rounded-md mb-2" />
                <p className="text-xs font-semibold">Secondary</p>
              </div>
              <div>
                <div className="w-full h-24 bg-accent rounded-md mb-2" />
                <p className="text-xs font-semibold">Accent</p>
              </div>
              <div>
                <div className="w-full h-24 bg-destructive rounded-md mb-2" />
                <p className="text-xs font-semibold">Destructive</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
