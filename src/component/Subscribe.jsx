import "./Subscribe.css";

export const Subscribe = () => {
  return (
    <>
      <div className="sub">
        <img className="email" src="image/email.webp" alt="" />
        <h1 className="avail">Subscribe to avail Special Offer</h1>
        <input
          className="emailid"
          type="text"
          placeholder="Enter your Email ID"
          required
        />
        <button className="subbtn">Subscribe</button>
      </div>
    </>
  );
};
