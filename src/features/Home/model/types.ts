import { MouseEventHandler } from "react";
import { UserInfo } from "@vkontakte/vk-bridge";

export interface HomeProps {
    id: string;
    go: MouseEventHandler<HTMLElement>;
    fetchedUser?: UserInfo;
}
