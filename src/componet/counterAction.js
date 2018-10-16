const inc = () => ({type: 'INC'})

const desc = () => ({type: 'DESC'})

const stepChanged = (e) => ({ type: 'STEP_CHANGED', payload: e.target.value })

export {inc, desc, stepChanged}