class Hello extends React.Component {
    render() {
        // console.log(this.props);
        // also, props are immutable

        let bangs="!".repeat(this.props.bangs);

        return (
            <div>
                <p>Hi {this.props.to} from {this.props.from} {bangs}</p>
                <img src={this.props.img}/>
            </div>
        );
    }
}