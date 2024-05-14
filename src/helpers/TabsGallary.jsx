import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LivingRoomImage from "/photo1.png";
import KitchenImage from "/photo4.png";
import RoomImage from "/photo2.png";
import OfficeImage from "/photo3.png";
import { useSelector } from "react-redux";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabsGallery() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { gallery, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.gallery
  );

  const livingRoom = gallery?.data?.filter(
    (item) => item?.gallery_category == "Living Room Interior"
  );

  const kitchen = gallery?.data?.filter(
    (item) => item?.gallery_category == "Kitchen Interior"
  );

  const roomInterior = gallery?.data?.filter(
    (item) => item?.gallery_category == "Room Interior"
  );

  const officeInterior = gallery?.data?.filter(
    (item) => item?.gallery_category == "Office Interior"
  );

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        className="sm:w-[41%] w-[95%] m-auto"
        sx={{
          borderBottom: 1,
          borderColor: "divider",

          margin: "auto",
        }}>
        <Tabs
          value={value}
          onChange={handleChange}
          sx={{
            "& .MuiTab-root.Mui-selected": {
              fontWeight: "bold",
              color: "#000",
            },
            "& .MuiTabs-indicator": {
              bgcolor: "#FFC50A",
            },
          }}
          className="flex items-center justify-center "
          aria-label="basic tabs example">
          <Tab label="  Living room " {...a11yProps(0)} />
          <Tab label="  Kitchen " {...a11yProps(1)} />
          <Tab label="  Room " {...a11yProps(2)} />
          <Tab label="    Office " {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-3 mt-10 py-5">
          {livingRoom?.map((item) => {
            return (
              <img
                src={item?.image}
                alt=""
                className="w-full h-full rounded-md p-3 shadow-md bg-white"
              />
            );
          })}
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-3 mt-10 py-5">
          {kitchen?.map((item) => {
            return (
              <img
                src={item?.image}
                alt=""
                className="w-full h-full rounded-md p-3 shadow-md bg-white"
              />
            );
          })}
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-3 mt-10 py-5">
          {roomInterior?.map((item) => {
            return (
              <img
                src={item?.image}
                alt=""
                className="w-full h-full rounded-md p-3 shadow-md bg-white"
              />
            );
          })}
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-3 mt-10 py-5">
          {officeInterior?.map((item) => {
            return (
              <img
                src={item?.image}
                alt=""
                className="w-full h-full rounded-md p-3 shadow-md bg-white"
              />
            );
          })}
        </div>
      </CustomTabPanel>
    </Box>
  );
}
