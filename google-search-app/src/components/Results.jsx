import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { useResultContext } from '../contexts/ResultContextProvider';
import { Loading } from './Loading';

const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext()
  const location = useLocation()

  useEffect(() => {
    getResults('/search/?query=java&num=30')
  }, [])

  if(isLoading) return <Loading />
  
  console.log(location.pathname)

  switch (location.pathname) {
    case '/search':
      return (
        <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
          {results?.results?.map(({ link, title }, index) => (
            <div key={index} className='md:w-2/5 w-full'>
              <a href={link} target='_blank' rel='noopener noreferrer'>
                <p className='text-sm'>
                  {link.length > 30 ? link.substring(0, 30) : link}
                </p>
                <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                  {title}
                </p>
              </a>
            </div>
          ))}
        </div>
      )
    case '/images':
      return 'SEARCH';
    case '/news':
      return 'SEARCH';
    case '/videos':
      return 'SEARCH';
    default:
      return 'Error!'
  }
}

export default Results