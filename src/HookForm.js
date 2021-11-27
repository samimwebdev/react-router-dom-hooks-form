import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const TextInput = ({ placeholder, register, label, errors }) => {
  return (
    <>
      <input type='text' placeholder={placeholder} {...register(label)} />
      <span style={{ color: 'red' }}>{errors?.[label]?.message}</span>
    </>
  )
}

export const HookForm = () => {
  const schema = yup
    .object({
      fName: yup.string().required('FirstName is Required'),
      lName: yup.string().required('LastName is Required'),
      email: yup
        .string()
        .email('Must Be Valid email')
        .required('Email is Required'),
      mobileNumber: yup
        .string()
        .matches(
          /\d{5,15}/,
          'Mobile number Must be in between 5 to 15 character '
        )
        .required('Mobile Number is Required'),
      developer: yup
        .string()
        .nullable()
        .oneOf(['Yes', 'No'])
        .required('Developer Field is Required')
    })
    .required()

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = data => {
    console.log(data)
    reset()
  }
  console.log(errors)
  console.log(watch('mobileNumber'))

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        label='fName'
        placeholder='First Name'
        register={register}
        errors={errors}
      />

      <br />
      <TextInput
        label='lName'
        placeholder='Last Name'
        register={register}
        errors={errors}
      />

      <br />
      <TextInput
        label='email'
        placeholder='Email'
        register={register}
        errors={errors}
      />
      <br />
      <TextInput
        label='mobileNumber'
        placeholder='Mobile Number'
        register={register}
        errors={errors}
      />
      <br />
      <select {...register('title', { required: true })}>
        <option value='Mr'>Mr</option>
        <option value='Mrs'>Mrs</option>
        <option value='Miss'>Miss</option>
        <option value='Dr'>Dr</option>
      </select>

      <br />
      <input
        {...register('developer', { required: true })}
        type='radio'
        value='Yes'
      />
      <br />
      <input
        {...register('developer', { required: true })}
        type='radio'
        value='No'
      />
      <span style={{ color: 'red' }}>{errors?.developer?.message}</span>
      <br />
      <input type='submit' />
    </form>
  )
}
