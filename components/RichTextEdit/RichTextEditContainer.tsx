import React, { FC } from "react";
import { Editor } from "@tinymce/tinymce-react";
interface IProps {
  description: string;
  onChange: (data: { [p: string]: any }) => void;
}

const RichText: FC<IProps> = ({ description, onChange }) => {
  return (
    <Editor
      initialValue={description}
      scriptLoading={{ async: true }}
      apiKey={"884aqo3zkbxfh6amt3cehy5v582usl6r6r8pu6i6kns9kfna"}
      init={{
        height: 360,
        resize: false,
        menubar: false,
        statusbar: false,
        toolbar:
          "undo redo | formatselect | bold italic | \
                    alignleft aligncenter alignright ",
      }}
      onChange={(data: { target: { getContent: () => string } }) =>
        onChange(data)
      }
    />
  );
};

export { RichText };
