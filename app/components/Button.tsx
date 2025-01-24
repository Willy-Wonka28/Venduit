interface buttonProps{
  buttonColor: string; 
  text: string; 
  color:string;
  border:string;
  borderColor:string
} 

function Button({buttonColor, text, color, border, borderColor}:buttonProps) {
  return (
    <button className="rounded-md w-[220px] h-[45px]" 
    style={{backgroundColor: buttonColor, color:color, border:border, borderColor: borderColor}}>
      {text}
      </button>
  )
}

export default Button