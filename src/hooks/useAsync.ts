import { useState, useEffect, useCallback } from 'react'

export const useAsync = (
  asyncFunction: (...args: any[]) => Promise<any>,
  immediate = true,
) => {
  const [pending, setPending] = useState(false)
  const [value, setValue] = useState(null)
  const [error, setError] = useState(null)

  const execute = useCallback(() => {
    setPending(true)
    setValue(null)
    setError(null)
    return asyncFunction()
      .then((response: any) => setValue(response))
      .catch((error: any) => setError(error))
      .finally(() => setPending(false))
  }, [asyncFunction])

  useEffect(() => {
    if (immediate) {
      execute()
    }
  }, [execute, immediate])

  return { execute, pending, value, error }
}
