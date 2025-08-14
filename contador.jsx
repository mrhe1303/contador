class SecondsCounter extends React.Component {
    render() {
        const segStr = this.props.segundos.toString().padStart(6, '0');
        const digitos = segStr.split('').map(Number);
    


    return (
        <div className='barra'>
            <div className='caja1'>
                <i className="fa-solid fa-clock reloj"></i>
            </div>
            {digitos.map((digito, index) => (
                <div key={index} className={`caja${index + 2}`}>
                    <h1>{digito}</h1>
                </div>
            ))}
        </div>
    );
}
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            segundos: 0
        };
    }
    componentDidMount() {
        this.intervalo = setInterval(() => {
            this.setState(prevState => ({
            segundos: prevState.segundos < 999999 ? prevState.segundos + 1 : 0
        }));
    }, 1000);
}

componentWillUnmount() {
    clearInterval(this.intervalo);
}

render() {
    return <SecondsCounter segundos={this.state.segundos} />;
}
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
