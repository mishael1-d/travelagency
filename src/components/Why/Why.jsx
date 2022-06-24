import React from "react";
import why1 from "../../assets/why1.png";
import why2 from "../../assets/why2.png";
import why3 from "../../assets/why3.png";
import why4 from "../../assets/why4.png";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import "./Why.css";

function Why() {
  return (
    <div className="why-section__container">
      <div className="container">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Item>
            <div className="textbox">
              <figure>
                <img src={why1} alt="" srcset="" />
              </figure>
              <caption>
                <p className="c-title">Amazing Travels</p>
                <p className="c-subtitle">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
                  hic atque ea nostrum delectus tempore iure temporibus aperiam
                  voluptas! Animi.
                </p>
              </caption>
            </div>
          </Item>
          <Item>
            <div className="textbox">
              <figure>
                <img src={why2} alt="" srcset="" />
              </figure>
              <caption>
                <p className="c-title">Amazing Travels</p>
                <p className="c-subtitle">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
                  hic atque ea nostrum delectus tempore iure temporibus aperiam
                  voluptas! Animi.
                </p>
              </caption>
            </div>
          </Item>
          <Item>
            <div className="textbox">
              <figure>
                <img src={why3} alt="" srcset="" />
              </figure>
              <caption>
                <p className="c-title">Amazing Travels</p>
                <p className="c-subtitle">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
                  hic atque ea nostrum delectus tempore iure temporibus aperiam
                  voluptas! Animi.
                </p>
              </caption>
            </div>
          </Item>
          <Item>
            <div className="textbox">
              <figure>
                <img src={why4} alt="" srcset="" />
              </figure>
              <caption>
                <p className="c-title">Amazing Travels</p>
                <p className="c-subtitle">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
                  hic atque ea nostrum delectus tempore iure temporibus aperiam
                  voluptas! Animi.
                </p>
              </caption>
            </div>
          </Item>
        </Stack>
        {/* <div className="text__container">
          <div className="textbox">
            <figure>
              <img src={why1} alt="" srcset="" />
            </figure>
            <caption>
              <p className="c-title">Amazing Travels</p>
              <p className="c-subtitle">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga hic atque ea nostrum delectus tempore iure temporibus aperiam voluptas! Animi.</p>
            </caption>
          </div>
          <div className="textbox">
            <figure>
              <img src={why2} alt="" srcset="" />
            </figure>
            <caption>
              <p className="c-title">Easy Booking</p>
              <p className="c-subtitle">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga hic atque ea nostrum delectus tempore iure temporibus aperiam voluptas! Animi.</p>
            </caption>
          </div>
          <div className="textbox">
            <figure>
              <img src={why3} alt="" srcset="" />
            </figure>
            <caption>
              <p className="c-title">Nice Support</p>
              <p className="c-subtitle">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga hic atque ea nostrum delectus tempore iure temporibus aperiam voluptas! Animi.</p>
            </caption>
          </div>
          <div className="textbox">
            <figure>
              <img src={why4} alt="" srcset="" />
            </figure>
            <caption>
              <p className="c-title">New Discovery</p>
              <p className="c-subtitle">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga hic atque ea nostrum delectus tempore iure temporibus aperiam voluptas! Animi.</p>
            </caption>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Why;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
