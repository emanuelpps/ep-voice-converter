export interface TitleProps {
  title: string;
}

export interface ButtonProps {
  isOnPress: boolean;
  setIsOnPress: (value: boolean) => void;
}

export interface TextBoxProps {
  textRecorded: string;
  setTextRecorded: (value: string) => void;
}
