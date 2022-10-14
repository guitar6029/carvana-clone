
interface props {
    title: string;
}

function Button({title}: props) {
  return (
    <button className='button_type'>{title.toUpperCase()}</button>
  )
}

export default Button