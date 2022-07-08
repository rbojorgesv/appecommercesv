import React from 'react'
import { useForm } from 'react-hook-form'

const InputSearch = () => {


  const {handleSubmit, register, reset} = useForm()

  const changeInputText = e => {
    setPokeSearch(e.target.value)
  }

  const submit = data => {
    console.log(data)
  }
  
  return (
    <form onSubmit={handleSubmit(submit)} className='form-home'>
      <input type="text" placeholder='Search your favorite product' onChange={changeInputText} {...register('searchText')} />
      <button>Search</button>
    </form>
  )
}


export default InputSearch