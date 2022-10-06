import './Header.css'

const Header = () => {
  return (
    <span className='header' onClick={() => window.scroll(0, 0)}>
      Movie And TV Series
    </span>
  )
}

export default Header