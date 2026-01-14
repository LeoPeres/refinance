import { Header } from "@/components/layout/header";
import { TransactionsTable } from "@/components/transactions/transactions-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { transactions } from "@/data/mock-data";

export default function TransactionsPage() {
  const sortedTransactions = [...transactions].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="min-h-screen">
      <Header title="Transacoes" />

      <div className="p-6">
        <Card>
          <CardHeader>
            <CardTitle>Todas as Contas</CardTitle>
          </CardHeader>
          <CardContent>
            <TransactionsTable transactions={sortedTransactions} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
