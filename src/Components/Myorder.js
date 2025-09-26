import react from 'react';
import {ClipboardList} from 'lucide-react';
import './Myorder.css';


const Myorder= () => {
  const myorderBackgroundStyle = {
    backgroundImage: "url('https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.1.0&auto=format&fit=crop&w=2070&q=80')"
  };

  return (  
    <>
      <div className="full-page-background" style={myorderBackgroundStyle}></div>
      <div className='myorder-content'>
        <h1>You don't have any orders yet</h1>  
        <ClipboardList size={240} />
      </div>
    </>
  );
}   

export default Myorder;
