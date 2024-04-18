/**
 * 메인 페이지에서 영화 이미지 클릭 시 나타나는 영화 정보 모달 창을 닫을 때, 모달 창의 외부 영역을 클릭해 닫을 수 있게 하기 위한 파일입니다.
 */

import { useEffect } from 'react'

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      handler()
    }

    document.addEventListener("mousedown", listener)
    document.addEventListener("touchstart", listener)

    return () => {
      document.removeEventListener("mousedown", listener)
      document.removeEventListener("touchstart", listener)
    }
  }, [ref, handler])
}

export default useOnClickOutside