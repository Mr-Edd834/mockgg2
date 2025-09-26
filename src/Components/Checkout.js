import react from 'react';

function Checkout() {
  const checkoutBackgroundStyle = {
    backgroundImage: "url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.1.0&auto=format&fit=crop&w=2070&q=80')"
  };

  return (
    <>
      <div className="full-page-background" style={checkoutBackgroundStyle}></div>
      <div className='page-content'>
        <h1>Checkout Page</h1>
        <p>This is the Checkout component.</p>
      </div>
    </>
  );
}

export default Checkout;
