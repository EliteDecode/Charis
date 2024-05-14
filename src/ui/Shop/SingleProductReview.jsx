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

export default function SingleProductReview({ singleProduct }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        className="sm:w-[33%] w-[95%] m-auto"
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
          <Tab label="Description" {...a11yProps(0)} />
          <Tab label="Additional Information" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <p
          dangerouslySetInnerHTML={{
            __html: singleProduct?.data?.description,
          }}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <p>{singleProduct?.data?.additional_info}</p>
      </CustomTabPanel>
    </Box>
  );
}
