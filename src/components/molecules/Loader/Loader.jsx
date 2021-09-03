import React from 'react'
import Skeleton from 'react-loading-skeleton'

export default function Loader() {
  return (
    <div className="loader">
      <div className="loader__skeleton">
        <Skeleton height={150} />
        <Skeleton count={2} />
      </div>
      <div className="loader__skeleton">
        <Skeleton height={150} />
        <Skeleton count={2} />
      </div>
      <div className="loader__skeleton">
        <Skeleton height={150} />
        <Skeleton count={2} />
      </div>
      <div className="loader__skeleton">
        <Skeleton height={150} />
        <Skeleton count={2} />
      </div>
    </div>
  );
}
