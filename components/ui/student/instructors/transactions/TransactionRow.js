"use client";

export default function TransactionRow({ transaction }) {
  const statusClass = transaction.status.toLowerCase();
  const amountClass = transaction.type === "debit" ? "debit" : "credit";

  return (
    <tr>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.student}</td>
      <td>
        <span className={`instructor-amount ${amountClass}`}>
          {transaction.amount}
        </span>
      </td>
      <td>
        <span className={`instructor-status-badge ${statusClass}`}>
          {transaction.status}
        </span>
      </td>
    </tr>
  );
}
