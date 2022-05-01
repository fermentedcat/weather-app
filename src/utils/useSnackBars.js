import { useContext } from 'react'

import { SnackBarContext } from './SnackBarContext'

const useSnackBars = () => useContext(SnackBarContext)

export default useSnackBars