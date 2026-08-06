import transactionsData from "../../../data/instructor-transactions.json";
import TransactionsPanel from "../../../components/ui/student/instructors/transactions/TransactionsPanel";

export default function InstructorTransactionsPage() {
  const { stats, transactions, filters, chart } = transactionsData;

  return (
    <TransactionsPanel
      stats={stats}
      transactions={transactions}
      filters={filters}
      chart={chart}
    />
  );
}
