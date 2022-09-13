import { useState } from "react";

const Transfer = () => {
  const [sender_email, setSender_Email] = useState("");
  const [receiver_email, setReceiver_Email] = useState("");
  const [amount, setAmount] = useState("");
  const handleSenderEmail = (event) => {
    setSender_Email(event.target.value);
  };
  const handleReceiverEmail = (event) => {
    setReceiver_Email(event.target.value);
  };
  const handleAmount = (event) => {
    setAmount(event.target.value);
  };
  return (
    <div style={{marginBottom:280}}>
      <h1>WELCOME TO TRANSFER PAGE</h1>
      <form
        action="http://localhost:3001/Transfer"
        method="POST"
        autoComplete="off"
      >
        <div className="form-group row" style={{ margin: 15 }}>
          <label htmlFor="sender_email" className="col-sm-2 col-form-label">
            {" "}
            SENDER EMAIL
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              id="sender_email"
              name="sender_id"
              value={sender_email}
              onChange={handleSenderEmail}
              required
              autoComplete="off"
            />
          </div>
        </div>
        <div className="form-group row" style={{ margin: 15 }}>
          <label htmlFor="receiver_email" className="col-sm-2 col-form-label">
            RECEIVER EMAIL
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              id="receiver_email"
              name="receiver_id"
              className="form-control"
              value={receiver_email}
              onChange={handleReceiverEmail}
              required
              autoComplete="off"
            ></input>
          </div>
        </div>
        <div
          className="form-group row"
          style={{ width: 450, margin: 15, marginLeft: 70 }}
        >
          <label htmlFor="amount" className="col-sm-2 col-form-label">
            AMOUNT{" "}
          </label>
          <div className="col-sm-10">
            <input
              type="number"
              className="form-control"
              name="amountTrans"
              value={amount}
              onChange={handleAmount}
              required
              style={{ marginLeft: 120 }}
              autoComplete="off"
              min={1}
            ></input>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10">
            <button
              type="submit"
              className="btn btn-success"
              style={{ width: 100, marginRight: 350 }}
            >
              PAY
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Transfer;
