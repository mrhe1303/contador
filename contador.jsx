const { useState, useEffect } = React;

function SecondsCounter({ segundos }) {
    const segStr = segundos.toString().padStart(6, '0');
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

function App() {
    const [segundos, conteoSegundos] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            conteoSegundos(viejosSegundos => {
                return viejosSegundos < 999999 ? viejosSegundos + 1 : 0;
            });
        }, 1000);

        return () => clearInterval(intervalo);
    }, []);
    return <SecondsCounter segundos={segundos} />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
