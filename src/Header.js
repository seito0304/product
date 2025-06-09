const Header = (props) =>{
    const headerStyle = {
    fontSize: 24,
    padding: 16,
    marginTop: 0,
    backgroundColor: 'black',
    color: 'aqua'
    }
    return(
    <div>
    <h1 style={headerStyle}>
    こんにちわ、{props.lastName}{props.firstName}さん！
    </h1>
    </div>
    );
   }
   export default Header;