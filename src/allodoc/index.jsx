import { Button, Row, Typography, Col } from "antd";
import React from "react";
import "./allpDoc.css";
import logo from "./assets/logo.png";
import profile from "./assets/profile.png";
import Drpic from "./assets/Image.png";
import Profile from "./Profile";
const { Text } = Typography;
const AlloDoc = () => {
  return (
    <div className="allo_Doc">
      <div>
        <Row className="alloDocHeader">
          <Text className="alloDocTest">
            <img src={logo} alt="logo" style={{ width: "35px" }} /> allodoc
          </Text>
          <Text className="HeaderDetails">
            <Row>
              <Col span={4}>
                <img src={profile} alt="profile" />
              </Col>
              <Col span={10}>
                <Text className="headerName">Ashrae Freeman</Text>
                <br />
                <Text className="headersubName"> Ashree Freeman</Text>
              </Col>
              <Col span={10}>
                <Button className="logoutButton"> Logout</Button>
              </Col>
            </Row>
          </Text>
        </Row>
      </div>
      <div className="ProfileBody">
        <div className="mainProfile">
          <Row gutter={32}>
            <Col span={6}>
              <img src={Drpic} />
            </Col>
            <Col span={6}>
              <div>
                <Row className="DrNameRow">
                  <Text className="DrName">Dr. Will Martin</Text>
                </Row>
                <Text className="DrProf">Chinese Medicine</Text>
                <div className="slotsDiv">
                  <Text className="slotsAvl"> 2 Slots Available Today</Text>
                </div>
              </div>
            </Col>
            <Col span={6}>
              {" "}
              <div>
                <Row className="HospRow">
                  <Text className="HospName">Jupiter Hospital,</Text>
                </Row>
                <Text className="HospAddress">
                  514, Avalanche Avenue, Waverly St, Louisiana, USA
                </Text>
                <div className="directionsDiv">
                  <Text className="getDire"> Get Directions</Text>
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className="slotButtonDiv">
                <Button className="slotButton">Book Slot</Button>
              </div>
            </Col>
          </Row>
        </div>
        <Profile />
      </div>
    </div>
  );
};

export default AlloDoc;
