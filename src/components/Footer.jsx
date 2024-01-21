export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 22;
  const isOpen = openHour < hour && hour < closeHour;

  return (
    <footer className="footer">
      <hr />
      <br />
      {isOpen ? (
        <>
          <p>We're open from 10am to 10pm.</p>
          <br />
          <button className="btn">Order</button>
        </>
      ) : (
        <p>Sorry, we're closed now, we will open tomorrow at {openHour}am. </p>
      )}
    </footer>
  );
}
