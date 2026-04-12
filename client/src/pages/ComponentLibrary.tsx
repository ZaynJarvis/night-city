// Design philosophy: Tactical Neo-Militarism as a standalone route.
// This page exists so the component library is not hidden inside the general bundle.
// It should feel like a dedicated destination for design-system exploration and reuse.

import { CyberpunkComponentLibrary } from "@/components/CyberpunkComponentLibrary";

export default function ComponentLibraryPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <CyberpunkComponentLibrary />
    </main>
  );
}
