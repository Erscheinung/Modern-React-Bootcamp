function getNum() {
    return Math.floor(Math.random() * 10) +1;
}

class NumPicker extends React.Component {
    render(){
        const num = getNum()
        let msg; // Method (3)
        if(num === 7) {
            msg = 
                <div>
                    <h2>WIN</h2>
                    <img src="https://images.unsplash.com/photo-1556909172-6ab63f18fd12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"/>
                </div>
        } else {
            msg = "LOL"
        }
        return (
            <div>
                <h1>Your number is: {num}</h1>  
                <p>{num === 7 ? 'Congrats' : 'Unlucky'}</p>
                {/*Ternary Method (1) {
                    num === 7 
                    ? <img src="https://images.unsplash.com/photo-1556909172-6ab63f18fd12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"/>
                    : null
                } */} 
                {/* Another Method (2) {
                    num === 7 &&
                    <img src="https://images.unsplash.com/photo-1556909172-6ab63f18fd12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"/>
                } */}
            </div>
        );
    }
}

ReactDOM.render(<NumPicker />, document.getElementById('root'));