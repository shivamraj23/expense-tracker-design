import { useState } from "react";
import "../styles.css";

export default function Balance() {
    const [balance, setBalance] = useState(1000);
    const [moneyin, setMoneyin] = useState(4000);
    const [moneyout, setMoneyout] = useState(3000);

    return (
        <div className="balance-container">
            <div className="balance">
                <h1>Balance</h1>
                <h1>{balance} </h1>
            </div>
            <div className="balance money-in">
                <h1>Money In</h1>
                <h1>{moneyin} </h1>
            </div>
            <div className="balance money-out">
                <h1>Money Out</h1>
                <h1>{moneyout} </h1>
            </div>
        </div>
    );
}
