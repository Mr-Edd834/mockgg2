import react from 'react';

const Orderhistory = () => {
  const orderhistoryBackgroundStyle = {
    backgroundImage: "url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.1.0&auto=format&fit=crop&w=2070&q=80')"
  };

  return (
    <>
      <div className="full-page-background" style={orderhistoryBackgroundStyle}></div>
      <div className='page-content'>   
        <h1>Order History Page</h1>
        <p>This is the Order History component.</p>
      </div>
    </>
  );
}   
export default Orderhistory;