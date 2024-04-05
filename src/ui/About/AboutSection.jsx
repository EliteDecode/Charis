import { Grid } from "@mui/material";
import RoomDecorImage from "/3d-room-decor-with-furniture-minimalist-beige-tones (2) 2.png";

function AboutSection() {
  const items = [
    { image: "public/Door.png", text: "Consultation" },
    { image: "public/Door.png", text: "Furniture Design" },
    { image: "public/Door.png", text: "3D Visualization" },
    { image: "public/Door.png", text: "Design Development" },
    { image: "public/Door.png", text: "Space Planning" },
    { image: "public/Door.png", text: "Lighting Design" },
  ];

  return (
    <div
      className="relative custom-container"
      style={{ marginTop: 40, marginBottom: 50 }}>
      <Grid container>
        <Grid item sm={12} md={6} className="z-10 hidden sm:block">
          <img
            className=" h-[603px] w-full z-10"
            src={RoomDecorImage}
            alt=""
            style={{ zIndex: 1000 }}
          />
        </Grid>
        <Grid item sm={12} md={6}>
          <div>
            <div className="text-center">
              <h1
                className="sm:text-[126px] text-[80px] text-center sm:-mt-24 mt-0 sm:-ml-24 -ml-0 z-0 text-yellow-400 text-opacity-25  cursor-default"
                style={{ zIndex: 0 }}>
                About Us
              </h1>
            </div>
            <div className="sm:w-[80%] w-[94%] m-auto sm:-mt-20 -mt-12">
              <h2 className="sm:text-[44px] text-[40px]">About</h2>
              <h2 className="sm:text-[44px] text-[40px] -mt-4">
                Chariz Interiors
              </h2>
              <p className="text-[15px] text-[#777777]">
                Fueled by our love for creativity and a meticulous eye for
                detail, we not only bring our clients' dreams to fruition but
                also seamlessly integrate aesthetics, functionality, and
                cost-efficiency. Our team, comprised of adept designers, smart
                home specialists, artisans, and project managers, collaborates
                to ensure unparalleled results for both residential and
                commercial endeavors.
              </p>

              <div className="mt-5">
                <Grid container>
                  {items.map((item, index) => (
                    <Grid
                      item
                      sm={6}
                      xs={6}
                      key={index}
                      className="flex items-center border gap-2 border-[#FFC50A] py-2 px-1 cursor-pointer">
                      <img src={item.image} alt="" />
                      <p>{item.text}</p>
                    </Grid>
                  ))}
                </Grid>
              </div>

              <div className="flex items-center gap-6 mt-16 cursor-pointer">
                <p className="text-black text-[18px] font-normal">Read More</p>
                <img
                  src="public\Group 4 (1).png"
                  alt=""
                  className="cursor-pointer w-[8%]"
                />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default AboutSection;
