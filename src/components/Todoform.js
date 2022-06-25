import React, { useState } from 'react';

function Todoform(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const handleChange = (event) => {
        setInput(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    }

    return (
        <form onSubmit={handleSubmit} className='todo-form'>
            {props.edit ? (
                <>
                    <input
                        name='text'
                        className='todo-input edit'
                        placeholder='Perbarui kegiatan'
                        value={input}
                        onChange={handleChange}
                    />
                    <button className='todo-button edit' onClick={handleSubmit}>Perbarui</button>
                </>
            ) : (
                <>
                    <input
                        name='text'
                        className='todo-input'
                        placeholder='Tambahkan kegiatan'
                        value={input}
                        onChange={handleChange}
                    />
                    <button className='todo-button' onClick={handleSubmit}>Tambah</button>
                </>

            )}

        </form>
    );
}

export default Todoform;