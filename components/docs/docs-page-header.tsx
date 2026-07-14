import { Badge } from "@/components/ui/badge";

export function DocsPageHeader({
  title,
  description,
  category,
  status,
}: {
  title: string;
  description: string;
  category?: string;
  status?: "Stable" | "New" | "Beta";
}) {
  return (
    <header>
      {category || status ? (
        <div className="flex flex-wrap gap-2">
          {category ? <Badge variant="outline">{category}</Badge> : null}
          {status ? <Badge variant="outline">{status}</Badge> : null}
        </div>
      ) : null}
      <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
      <p className="mt-4 text-lg leading-8 text-muted-foreground">{description}</p>
    </header>
  );
}
