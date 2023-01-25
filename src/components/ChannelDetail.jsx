import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./index";
import { fetchFromAPI } from "../utils/fetchFromApi";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`channels?part='snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchFromAPI(`search?channelId=${id}&part='snippet&order=data'`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,1) 24%, rgba(7,100,76,0.8425460636515913) 76%, rgba(165,231,242,0.5884892086330935) 99%)",
            zIndex: 10,
            heigth: "300px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} />
        <Box display="flex" p="2">
          <Box sx={{ mr: { sm: "100px" } }}>
            <Videos videos={videos} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
