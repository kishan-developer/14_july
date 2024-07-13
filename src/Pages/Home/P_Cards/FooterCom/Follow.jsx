import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import IconButton from '@mui/material/IconButton';

function Follow() {
  return (
      <div className="first ">
          <h2 className="w-full font-bold text-gray-400 text-[1.4rem]">Follow Us</h2>
          <div className="w-full flex flex-row text-white mt-5 items-center ">
              {/* Media links  */}
              <IconButton style={{ color :"white"}}>
                <FacebookIcon/>
              </IconButton>

              <IconButton style={{ color: "white" }}>
                  <InstagramIcon />
              </IconButton>

              <IconButton style={{ color: "white" }}>
                  <YouTubeIcon />
              </IconButton>

              <IconButton style={{ color: "white" }}>
                  <TwitterIcon />
              </IconButton>

              <IconButton style={{ color: "white" }}>
                  <PinterestIcon />
              </IconButton>
             
          </div>

      </div>
  )
}

export default Follow