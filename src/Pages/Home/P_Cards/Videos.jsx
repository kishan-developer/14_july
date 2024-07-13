import React from 'react'

function Videos() {
  return (
    <div className="w-full h-[400px] flex items-center justify-center p-5 mt-5 ">
          {/* <video width="320" height="240" controls>
              <source src="https://www.youtube.com/embed/Xs2hAWuPmSg?si=UZVdPC7uPje_N-G9" type="video/mp4" />
          </video> */}
            
          <iframe width="100%" height="415" src="https://www.youtube.com/embed/Xs2hAWuPmSg?si=UZVdPC7uPje_N-G9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

           
    </div>
  )
}

export default Videos;