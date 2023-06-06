import "./styles.css";
import Balance from "./components/Balance";
import Transactions from "./components/Transactions";
import Newtransaction from "./components/Newtransaction";

export default function App() {
    return (
        <div className="App">
            <Balance></Balance>
            <div className="middlerow">
                <Transactions></Transactions>
                <Newtransaction></Newtransaction>
            </div>
        </div>
    );
}
