import React, { useState } from "react";
import { Radio, Space, Tabs } from "antd";
import { NavLink } from "react-router-dom";
import moment from "moment";

const { TabPane } = Tabs;

export default function HomeMenu(props) {
  const [state, setState] = useState({
    tabPosition: "left",
  });

  const { dataCinema } = props;

  const changeTabPosition = (e) => {
    setState({ tabPosition: e.target.value });
  };

  const renderHeThongRap = () => {
    return dataCinema?.map((cinema, index) => {
      let { tabPosition } = state;
      return (
        <TabPane
          key={index}
          tab={<img src={cinema.logo} className="rounded-full" width="50" />}
        >
          <Tabs tabPosition={tabPosition}>
            {cinema.lstCumRap?.map((cumRap, index) => {
              return (
                <TabPane
                  key={index}
                  tab={
                    <div className="d-flex align-items-center">
                      <img src={cumRap.hinhAnh} width="50" className="mr-2" />
                      <div className="text-left">
                        <p>{cumRap.tenCumRap}</p>
                        <p className="text-red-200">
                          Địa chỉ:{" "}
                          {cumRap.diaChi.length > 30
                            ? `${cumRap.diaChi.slice(0, 30)}...`
                            : `${cumRap.diaChi}`}
                        </p>
                      </div>
                    </div>
                  }
                >
                  {cumRap.danhSachPhim.slice(0, 6).map((phim, index) => {
                    return (
                      <React.Fragment key={index}>
                        <div className="my-5">
                          <div className="d-flex">
                            <img
                              width={100}
                              height={100}
                              src={phim.hinhAnh}
                              alt={phim.hinhAnh}
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "https://picsum.photos/200";
                              }}
                            />
                            <div className="ml-2">
                              <h3 className="text-2xl text-green-700">
                                {phim.tenPhim}
                              </h3>
                              <p className="text-red-400">{cumRap.diaChi}</p>
                              <div className="grid grid-cols-5 gap-5">
                                {phim.lstLichChieuTheoPhim
                                  ?.slice(0, 10)
                                  .map((lichChieu, index) => {
                                    return (
                                      <NavLink
                                        className="text-2xl text-green-400"
                                        to="/"
                                        key={index}
                                      >
                                        {moment(
                                          lichChieu.ngayChieuGioChieu
                                        ).format("hh:mm A")}
                                      </NavLink>
                                    );
                                  })}
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr />
                      </React.Fragment>
                    );
                  })}
                </TabPane>
              );
            })}
          </Tabs>
        </TabPane>
      );
    });
  };

  const { tabPosition } = state;
  return (
    <>
      <Tabs tabPosition={tabPosition}>{renderHeThongRap()}</Tabs>
    </>
  );
}
