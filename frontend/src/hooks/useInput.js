import { useState } from 'react'

export const useInput = (initialVal) => {
    const [value, setValue] = useState(initialVal);

    return {
        value,
        setValue,
        reset: () => { setValue('') },
        bind: {
            value,
            onChange: e => { setValue(e.target.value) }
        }
    }
}
