import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col items-center justify-center gap-12 p-8 font-sans">
      <div className="space-y-4 text-center">
        <h1 className="font-heading text-primary text-6xl">Code of Conduct Page</h1>
        <p className="text-foreground/80 max-w-2xl text-xl">
          Envisioning the Future Through Python
        </p>
      </div>

      <div className="bg-card flex w-full max-w-4xl flex-col items-center justify-center gap-6 rounded-2xl border p-12 shadow-sm sm:flex-row">
        <div className="w-full space-y-4">
          <h2 className="font-heading text-secondary text-2xl">Button Variants</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="default">Primary Action</Button>
            <Button variant="secondary">Secondary Action</Button>
            <Button variant="outline">Outline Variant</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        </div>

        <div className="w-full space-y-4">
          <h2 className="font-heading text-accent text-2xl">Button Sizes</h2>
          <div className="flex flex-wrap items-end gap-4">
            <Button size="lg">Large Size</Button>
            <Button size="default">Default Size</Button>
            <Button size="sm">Small Size</Button>
            <Button size="xs">XS</Button>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Button
          variant="default"
          className="shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
        >
          Early-Bird Tickets Opening Soon
        </Button>
      </div>
    </div>
  );
}
