import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function AppTable() {
  return (
    <Table>
      <TableCaption>App Information</TableCaption>
      <TableHead>
        <TableRow>
          <TableHeader>App Name</TableHeader>
          <TableHeader>Bundle ID</TableHeader>
          <TableHeader>Version</TableHeader>
          <TableHeader>Price</TableHeader>
          <TableHeader>Country</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>School</TableCell>
          <TableCell>Some</TableCell>
          <TableCell>1,7</TableCell>
          <TableCell>$2300</TableCell>
          <TableCell>KE</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
