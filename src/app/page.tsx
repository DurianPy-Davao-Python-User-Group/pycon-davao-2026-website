import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-center gap-12 font-sans bg-background text-foreground">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-heading text-primary">PyCon Davao 2026</h1>
        <p className="text-xl max-w-2xl text-foreground/80">
          Envisioning the Future Through Python
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 items-center justify-center p-12 bg-card rounded-2xl border shadow-sm w-full max-w-4xl">
        <div className="space-y-4 w-full">
          <h2 className="text-2xl font-heading text-secondary">Button Variants</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="default">Primary Action</Button>
            <Button variant="secondary">Secondary Action</Button>
            <Button variant="outline">Outline Variant</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        </div>

        <div className="space-y-4 w-full">
          <h2 className="text-2xl font-heading text-accent">Button Sizes</h2>
          <div className="flex flex-wrap items-end gap-4">
            <Button size="lg">Large Size</Button>
            <Button size="default">Default Size</Button>
            <Button size="sm">Small Size</Button>
            <Button size="xs">XS</Button>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <Button variant="default" className="shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all">
          Early-Bird Tickets Opening Soon
        </Button>
      </div>
    </div>
  );
}
