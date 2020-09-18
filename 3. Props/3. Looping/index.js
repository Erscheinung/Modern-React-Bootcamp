class App extends React.Component {
    render() {
        return(
            <div>
                <Friend
                    name="Joji"
                    hobbies={['Slow','Dancing','In','The','Rain']}
                />
                <Friend
                    name="Franku"
                    hobbies={['Chromosomes','Omniverse','Cake','Epilepsy']}
                />
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('root'));