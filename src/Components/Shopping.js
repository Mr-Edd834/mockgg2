import react from 'react';

const Shopping= () => {
  const shoppingBackgroundStyle = {
    backgroundImage: "url('https://images.unsplash.com/photo-1555529902-1c7c0b5b5b5b?ixlib=rb-4.1.0&auto=format&fit=crop&w=2070&q=80')"
  };

  return (
    <>
      <div className="full-page-background" style={shoppingBackgroundStyle}></div>
      <div className='page-content'>   
        <h1>Shopping Page</h1>  
        <p>This is the Shopping component.</p>
      </div>
    </>
  );
}   

export default Shopping;    