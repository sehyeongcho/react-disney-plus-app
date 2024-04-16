/**
 * 검색되는 영화의 포스터를 클릭했을 때 보여주기 위한 영화 상세 페이지 파일입니다.
 */

import axios from '../../api/axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../../components/MovieModal/MovieModal.css'
import './DetailPage.css'

const DetailPage = () => {
  let { movieId } = useParams()
  const [movie, setMovie] = useState({})

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `/movie/${movieId}`
      )
      setMovie(request.data)
    }
    fetchData()
  }, [movieId])

  if (!movie) return null

  return (
    <section className="detail-container">
      <img
        className="modal__poster-img"
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt="modal__poster-img"
      />
      <div className="detail-contents">
        <h1>{movie.title}</h1>
        <p className="movie__vote-average">평균 {movie.vote_average}점</p>
        <p>{movie.release_date} 개봉</p>
        <p>{movie.runtime}분</p>
        <ul>
          {movie.genres?.map((genre) => {
            return (
              <li className="genre" key={genre.id}>
                {genre.name}
              </li>
            )
          })}
        </ul>
        <p className="movie__overview">{movie.overview}</p>
      </div>
    </section>
  )
}

export default DetailPage