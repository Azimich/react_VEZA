import Styles from "./OwnObject.module.scss";
import React, { FC } from "react";
import { IObjects } from "../../types/response";
import { OwnObjectItem } from "components/own_object/OwnObjectItem";
import { ConnectError } from "components/connect_error";

interface IObjectRes {
  props: IObjects[];
}
const OwnObjectContainer: FC<IObjectRes> = ({ props }) => {
  return (
    <ul className={Styles.container}>
      {props?.length > 0 ? (
        props?.map((e) => {
          return <OwnObjectItem {...e} key={e.slidePosition} />;
        })
      ) : (
        <ConnectError type={"text"} />
      )}
    </ul>
  );
};

export { OwnObjectContainer };
