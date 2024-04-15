/**
 * 영화 자세히 보기 클릭 시, 영화 이미지, 개봉일, 제목, 평점, 줄거리 등의 세부 정보를 담은 모달을 생성하는 파일입니다.
 */

import React, { useRef } from 'react'
import './MovieModal.css'
import useOnClickOutside from '../../hooks/useOnClickOutside'

const MovieModal = ({
  backdrop_path,
  title,
  overview,
  name,
  release_date,
  first_air_date,
  vote_average,
  setModalOpen
}) => {
  const ref = useRef()

  useOnClickOutside(ref, () => {
    setModalOpen(false)
  })

  return (
    <div className="presentation" role="presentation">
      <div className="wrapper-modal">
        <div className="modal" ref={ref}>
          <span
            onClick={() => setModalOpen(false)}
            className="modal-close"
          >
            X
          </span>

          <img
            className="modal__poster-img"
            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
            alt="modal-img"
          />

          <div className="modal__content">
            <p className="modal__details">
              <span className="modal__user_perc">
                100% for you
              </span>{" "}
              {release_date ? release_date : first_air_date}
            </p>
            <h2 className="modal__title">{title ? title : name}</h2>
            <p className="modal__overview">평점: {vote_average}</p>
            <p className="modal__overview">{overview}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieModal