/**
 * 사용자가 영화를 검색할 때, 검색을 위해 입력하는 각 문자를 모두 처리하게 되면 성능이 저하되고 백엔드에 불필요한 로드가 추가될 수 있습니다. 이 파일은 이러한 현상을 방지하기 위해 개발자가 미리 결정한 시간 동안 처리를 지연시키기 위한 파일입니다.
 */

import { useEffect, useState } from 'react'

const useDebounce = (value, delay) => {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    // Update debounced value after delay
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    // Cancel the timeout if value changes (also on delay change or unmount)
    // This is how we prevent debounced value from updating if value is changed ...
    // .. within the delay period. Timeout gets cleared and restarted.
    return () => {
      clearTimeout(handler)
    }
  }, [value, delay]) // Only re-call effect if value or delay changes


  return debouncedValue
}

export default useDebounce