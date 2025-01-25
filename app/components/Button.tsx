interface buttonProps{
  buttonColor: string; 
  text: string; 
  color:string;
  boxShadow:string
} 

function Button({buttonColor, text, color, boxShadow}:buttonProps) {
  return (
    <button className="rounded-md w-[220px] h-[45px]" 
    style={{backgroundColor: buttonColor, color:color, boxShadow:boxShadow}}>
      {text}
      </button>
  )
}

export default Button