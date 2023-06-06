import { useState } from "react";
import { transactions } from "./transactionsdata";
import "../styles.css";

export default function Newtransaction() {
    const [inputs, setInputs] = useState({});
    const [inputarr, setInputarr] = useState(transactions);

    const changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        const newname = inputs.tname;
        const newamount = inputs.tamount;
        console.log(newname);
        console.log(newamount);
        setInputarr((previous) => [
            ...previous,
            { name: newname, amount: newamount }
        ]);
        console.log(inputarr);
        console.log(transactions);
    };

    return (
        <div className="new-transaction-container">
            <h2>Add new transaction</h2>
            <div className="new-transaction">
                <form onSubmit={handleSubmit}>
                    <label>
                        <input
                            className="inputbox"
                            placeholder="category"
                            type="text"
                            name="tname"
                            value={inputs.tname || ""}
                            onChange={changeHandler}
                            autoComplete="off"
                        />
                    </label>
                    <label>
                        <input
                            className="inputbox"
                            placeholder="amount"
                            type="text"
                            name="tamount"
                            value={inputs.tamount || ""}
                            onChange={changeHandler}
                            autoComplete="off"
                        />
                    </label>
                    <input className="submitbtn" type="submit" value="Add" />
                </form>
            </div>
        </div>
    );
}
