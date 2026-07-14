import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export type PropRow = {
  name: string;
  type: string;
  defaultValue?: string;
  required?: boolean;
  description: string;
};

export function PropsTable({ rows }: { rows: PropRow[] }) {
  return (
    <div className='mt-6 overflow-hidden rounded-xl border'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Prop</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Default</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell className='align-top font-mono text-xs'>
                {row.name}
                {row.required ? (
                  <span className='text-destructive ml-1'>*</span>
                ) : null}
              </TableCell>
              <TableCell className='max-w-64 align-top font-mono text-xs text-teal-700 dark:text-teal-300'>
                {row.type}
              </TableCell>
              <TableCell className='text-muted-foreground align-top font-mono text-xs'>
                {row.defaultValue ?? '—'}
              </TableCell>
              <TableCell className='text-muted-foreground min-w-64 align-top text-sm leading-6'>
                {row.description}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
