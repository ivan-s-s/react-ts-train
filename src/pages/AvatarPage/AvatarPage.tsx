import { FC } from "react";
import { Hr } from "components";
import { Avatar } from "ui-kit";
import avatar from "./avatar.jpg";

export const AvatarPage: FC = () => {
  return (
    <div>
      <h2>Avatar with initials</h2>
      <Avatar title="IT"/>
      <Hr />
      <h2>Avatar with image</h2>
      <Avatar image={avatar}/>
    </div>
  );
};