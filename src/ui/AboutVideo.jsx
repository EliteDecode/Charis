import { Box } from "@mui/material";
import React from "react";
import ReactPlayer from "react-player";

const AboutVideo = () => {
  return (
    <div className="mt-12">
      <Box className=" sm:w-[88%] w-full m-auto sm:h-[70vh] h-[40vh]">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=S-A0qLTxf-U"
          width="100%"
          height="100%"
          controls
          config={{
            youtube: { playerVars: { controls: 1, modestbranding: 1 } },
          }}
        />
      </Box>
      <Box className="h-[50vh] -mt-48 bg-[#000000C9] sm:block hidden"></Box>
    </div>
  );
};

export default AboutVideo;
