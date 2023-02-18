import React, { FC } from "react";
/*import Styles from "./ModalBanner.module.scss";
import {Button} from "components/button";
import {LayoutInput} from "components/input";

import {Editor} from "components/editor_pen";
import {Textarea} from "components/textarea/Index";*/
import { ModalForm } from "features/home/bannerModal/ModalForm";

const ModalBannerEdit: FC = () => {
  /*    const [inputValue, setInputValue] = useState("");
        const [buttonLink, setButtonLink] = useState("");*/

  /*
        const handleOnChange = (event: any) => {
            setInputValue(event.target.value);
        };
        const handleOnChangeButton = (event: any) => {
            setButtonLink(event.target.value);
        };
    */

  return <ModalForm type={"edit"} />;
};

export { ModalBannerEdit };
