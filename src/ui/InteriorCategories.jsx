import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function InteriorCategories() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      className="text-center custom-container sm:py-16 py-0"
      style={{ marginBottom: 30 }}>
      <Box className=" sm:block hidden">
        <Box
          className="tabs sm:block hidden"
          sx={{
            flexGrow: 1,
            bgcolor: "background.paper",
            display: "flex",
          }}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            className="w-[120%]"
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{
              borderRight: 1,
              borderColor: "divider",
              "& .MuiTab-root.Mui-selected": {
                fontWeight: "bold",
                color: "#000",
              },
              "& .MuiTabs-indicator": {
                bgcolor: "#FFC50A",
              },
            }}>
            <Tab label="Residential Interior Design" {...a11yProps(0)} />
            <Tab label="Smart Home Design" {...a11yProps(1)} />
            <Tab label="Commercial Interior Design" {...a11yProps(2)} />
            <Tab label="3D Interior Design" {...a11yProps(3)} />
            <Tab label="Project Management" {...a11yProps(4)} />
            <Tab label="Consultation" {...a11yProps(5)} />
            <Tab label="Interior Design School" {...a11yProps(6)} />
            <Tab label="Residential Interior Design" {...a11yProps(7)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Box>
              <h1>Residential Interior Design</h1>
              <p className="text-[#777777]">
                Chariz Interiors is a full-service design firm providing
                architecture, master planning, urban design, interior
                architecture, space planning and programming. Our portfolio of
                completed work includes highly acclaimed and award-winning
                projects for clients around the country.
              </p>
              <p className="text-[#777777]">
                ou don’t create unforgettable spaces all over the world with a
                single design tool. Our expertise in drawing people together is
                as broad as it is deep. It draws from a variety of disciplines,
                each one contributing to the bigger picture and sustainable
                growth. More than 3,000 projects fill our portfolio, but it’s
                the millions of people who experience them who matter most.
                We’ve grouped our work into five categories: places, venues,
                spaces, experiences and events.
              </p>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Box>
              <h1>Residential Interior Design</h1>
              <p className="text-[#777777]">
                Chariz Interiors is a full-service design firm providing
                architecture, master planning, urban design, interior
                architecture, space planning and programming. Our portfolio of
                completed work includes highly acclaimed and award-winning
                projects for clients around the country.
              </p>
              <p className="text-[#777777]">
                ou don’t create unforgettable spaces all over the world with a
                single design tool. Our expertise in drawing people together is
                as broad as it is deep. It draws from a variety of disciplines,
                each one contributing to the bigger picture and sustainable
                growth. More than 3,000 projects fill our portfolio, but it’s
                the millions of people who experience them who matter most.
                We’ve grouped our work into five categories: places, venues,
                spaces, experiences and events.
              </p>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Box>
              <h1>Residential Interior Design</h1>
              <p className="text-[#777777]">
                Chariz Interiors is a full-service design firm providing
                architecture, master planning, urban design, interior
                architecture, space planning and programming. Our portfolio of
                completed work includes highly acclaimed and award-winning
                projects for clients around the country.
              </p>
              <p className="text-[#777777]">
                ou don’t create unforgettable spaces all over the world with a
                single design tool. Our expertise in drawing people together is
                as broad as it is deep. It draws from a variety of disciplines,
                each one contributing to the bigger picture and sustainable
                growth. More than 3,000 projects fill our portfolio, but it’s
                the millions of people who experience them who matter most.
                We’ve grouped our work into five categories: places, venues,
                spaces, experiences and events.
              </p>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Box>
              <h1>Residential Interior Design</h1>
              <p className="text-[#777777]">
                Chariz Interiors is a full-service design firm providing
                architecture, master planning, urban design, interior
                architecture, space planning and programming. Our portfolio of
                completed work includes highly acclaimed and award-winning
                projects for clients around the country.
              </p>
              <p className="text-[#777777]">
                ou don’t create unforgettable spaces all over the world with a
                single design tool. Our expertise in drawing people together is
                as broad as it is deep. It draws from a variety of disciplines,
                each one contributing to the bigger picture and sustainable
                growth. More than 3,000 projects fill our portfolio, but it’s
                the millions of people who experience them who matter most.
                We’ve grouped our work into five categories: places, venues,
                spaces, experiences and events.
              </p>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={4}>
            <Box>
              <h1>Residential Interior Design</h1>
              <p className="text-[#777777]">
                Chariz Interiors is a full-service design firm providing
                architecture, master planning, urban design, interior
                architecture, space planning and programming. Our portfolio of
                completed work includes highly acclaimed and award-winning
                projects for clients around the country.
              </p>
              <p className="text-[#777777]">
                ou don’t create unforgettable spaces all over the world with a
                single design tool. Our expertise in drawing people together is
                as broad as it is deep. It draws from a variety of disciplines,
                each one contributing to the bigger picture and sustainable
                growth. More than 3,000 projects fill our portfolio, but it’s
                the millions of people who experience them who matter most.
                We’ve grouped our work into five categories: places, venues,
                spaces, experiences and events.
              </p>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={5}>
            <Box>
              <h1>Residential Interior Design</h1>
              <p className="text-[#777777]">
                Chariz Interiors is a full-service design firm providing
                architecture, master planning, urban design, interior
                architecture, space planning and programming. Our portfolio of
                completed work includes highly acclaimed and award-winning
                projects for clients around the country.
              </p>
              <p className="text-[#777777]">
                ou don’t create unforgettable spaces all over the world with a
                single design tool. Our expertise in drawing people together is
                as broad as it is deep. It draws from a variety of disciplines,
                each one contributing to the bigger picture and sustainable
                growth. More than 3,000 projects fill our portfolio, but it’s
                the millions of people who experience them who matter most.
                We’ve grouped our work into five categories: places, venues,
                spaces, experiences and events.
              </p>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={6}>
            <Box>
              <h1>Residential Interior Design</h1>
              <p className="text-[#777777]">
                Chariz Interiors is a full-service design firm providing
                architecture, master planning, urban design, interior
                architecture, space planning and programming. Our portfolio of
                completed work includes highly acclaimed and award-winning
                projects for clients around the country.
              </p>
              <p className="text-[#777777]">
                ou don’t create unforgettable spaces all over the world with a
                single design tool. Our expertise in drawing people together is
                as broad as it is deep. It draws from a variety of disciplines,
                each one contributing to the bigger picture and sustainable
                growth. More than 3,000 projects fill our portfolio, but it’s
                the millions of people who experience them who matter most.
                We’ve grouped our work into five categories: places, venues,
                spaces, experiences and events.
              </p>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={6}>
            <Box>
              <h1>Residential Interior Design</h1>
              <p className="text-[#777777]">
                Chariz Interiors is a full-service design firm providing
                architecture, master planning, urban design, interior
                architecture, space planning and programming. Our portfolio of
                completed work includes highly acclaimed and award-winning
                projects for clients around the country.
              </p>
              <p className="text-[#777777]">
                ou don’t create unforgettable spaces all over the world with a
                single design tool. Our expertise in drawing people together is
                as broad as it is deep. It draws from a variety of disciplines,
                each one contributing to the bigger picture and sustainable
                growth. More than 3,000 projects fill our portfolio, but it’s
                the millions of people who experience them who matter most.
                We’ve grouped our work into five categories: places, venues,
                spaces, experiences and events.
              </p>
            </Box>
          </TabPanel>
        </Box>
      </Box>
      <div className=" sm:hidden block">
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header">
            Residential Interior Design
          </AccordionSummary>
          <AccordionDetails>
            <Box className="text-left">
              <h1>Residential Interior Design</h1>
              <p className="text-[#777777]">
                Chariz Interiors is a full-service design firm providing
                architecture, master planning, urban design, interior
                architecture, space planning and programming. Our portfolio of
                completed work includes highly acclaimed and award-winning
                projects for clients around the country.
              </p>
              <p className="text-[#777777]">
                ou don’t create unforgettable spaces all over the world with a
                single design tool. Our expertise in drawing people together is
                as broad as it is deep. It draws from a variety of disciplines,
                each one contributing to the bigger picture and sustainable
                growth. More than 3,000 projects fill our portfolio, but it’s
                the millions of people who experience them who matter most.
                We’ve grouped our work into five categories: places, venues,
                spaces, experiences and events.
              </p>
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header">
            Smart Home Design
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header">
            Commercial Interior Design
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header">
            3D Interior Design
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header">
            Project Management
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header">
            Consultation
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header">
            Interior Design School
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
      </div>
    </Box>
  );
}
