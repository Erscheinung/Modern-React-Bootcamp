
class Hello extends React.Component {
    render(){
        return (
            <div>
                <h1>Hello there!</h1>
                <h1>Hello there!</h1>
                <h1>Hello there!</h1>            
            </div>
        );
    }
}

function Pello() {  //dumb shit, just return it
    return (
        <div>
            <h1>Hello there!</h1>
            <h1>Hello there!</h1>
            <h1>Hello there!</h1>            
        </div>
    );
}

ReactDOM.render(<Pello />, document.getElementById('root'));