class Machine extends React.Component {
    render() {
        const {s1,s2,s3} = this.props;
        const winner = s1 === s2 && s2 === s3;
        const colours = {fontSize: '50px', backgroundColor: 'purple'};

        return(
            <div className="Machine">
                <p style={colours}>
                    {s1} {s2} {s3}
                </p>
                <p className={winner ? 'win': 'lose'}>
                    {winner ? 'Winner!' : 'Loser!'}
                </p>
            </div>
        )
    }
}