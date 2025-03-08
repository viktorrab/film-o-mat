export function Button({ children, onClick }) {
    return (
      <button 
        onClick={onClick} 
        style={{ padding: "10px", background: "blue", color: "white", borderRadius: "5px", border: "none", cursor: "pointer" }}
      >
        {children}
      </button>
    );
  }
  
  