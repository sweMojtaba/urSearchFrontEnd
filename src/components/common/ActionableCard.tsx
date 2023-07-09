import { CardButtonProps } from "./hooks/useButtonProps";

export interface ActionableCardProps {
    title: string;
    children: React.ReactNode;
    editFunc: () => void;
    buttonProps?: CardButtonProps;
}

export default function ActionableCard() {

}