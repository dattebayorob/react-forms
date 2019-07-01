import React, { useState } from 'react';
import './App.css';
import { useFormSchema } from './components/formSchema';
import { pathToFileURL } from 'url';

function App() {
  const [name, setName] = useState('')
  const [lastname, setLastname] = useState('')
  const [errors, setErrors] = useState([])

  const schema = useFormSchema()

  const handleSubmit = async (e) =>{
    e.preventDefault()
    try{
      let valid = await schema.validate({name,lastname}, {abortEarly:false})
    }catch(invalid){
      let errors = invalid.inner.map(error => ({
        message: error.message, path: error.path
      }))
      setErrors(errors)
    }
  }


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
        <label>Lastname</label>
        <input type="text" name="lastname" value={lastname} onChange={e => setLastname(e.target.value)} />
        <input type="submit" />
        <div>
          {errors.forEach(({message}) => alert(message))}
        </div>
      </form>
    </div>
  );
}

export default App;
