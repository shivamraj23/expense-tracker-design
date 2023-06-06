import "../styles.css";
import { transactions } from "./transactionsdata";
export default function Transactions() {
    return (
        <div className="transaction-container">
            <h2>Transactions</h2>
            <div className="transactions">
                {transactions.map((transaction) => (
                    <div className="single-transaction">
                        <h3>{transaction.name}</h3>
                        <h3>{transaction.amount}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}
