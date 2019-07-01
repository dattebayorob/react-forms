import React from 'react'
import * as yup from 'yup'

export const useFormSchema = props => {
    return yup.object().shape({
        name: yup.string().required(),
        lastname: yup.string().required()
    })
}