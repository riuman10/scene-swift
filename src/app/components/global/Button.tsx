


type button =  {
  title : String,
  onClick : () => void
}

const Button = ({title , onClick} : button) => {
  return (
    <div onClick={onClick}>
    <p className = "text-green-500">{title}</p>
    </div>
  )
}

export default Button;