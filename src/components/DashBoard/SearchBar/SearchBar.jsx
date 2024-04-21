import './SearchBar.css'

const SearchBar = () => {
  return (
    <>
        <div className="input-group">
            <input type="email" className="input" id="Email" name="Email" placeholder="NIFTY50" autoComplete="off" />
            <input className="button--submit" value="Search" type="submit" />
        </div> 
    </>
  )
}

export default SearchBar
