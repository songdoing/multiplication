const React = require('react');
const { useState, useRef } = React;

const Multiplication = () => {
    const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef(null);

    const onChangeInput = (e) => {
        setValue(e.target.value);
    };
    const onSubmitForm = (e) => {
        e.preventDefault();
        if(parseInt(value) === first * second) {
            setResult((first) + ' X ' + (second) + ' = ' + (value) + '  You are right'),
            setFirst(Math.ceil(Math.random()*9)),
            setSecond(Math.ceil(Math.random()*9)),
            setValue(''),
        
            inputRef.current.focus();
            
        } else {
            setResult('Try again'),
            setValue(''),
            
            inputRef.current.focus();
        }
    };

    return (
        <>
            <div id="name">Hello! Mason </div>
            <div>{first} X {second} = ? </div>
            <form onSubmit={onSubmitForm}>
                <input ref={inputRef} onChange={onChangeInput} value= {value} />
                <button> ENTER </button>
            </form>
            <div id="result">{result}</div>        
        </>
    );
};

module.exports = Multiplication;