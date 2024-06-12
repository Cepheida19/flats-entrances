import { useState } from "react";
import { Button } from "../ui/button/button";
import { Typography } from "../ui/typography/typography";
import { ReactComponent as CloseIcon } from "./../../icons/icon-close.svg";
import { EntrancesType } from "../../store/dataSlice";
import { ModalFlats } from "../modal-flats/modal-flats";
import styles from "./modal-entrances.module.scss";

type ModalPropsType = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  list?: EntrancesType[];
  houseNumber?: string;
};

export const ModalEntrances: React.FC<ModalPropsType> = ({
  isOpen,
  onClose,
  title,
  list,
  houseNumber,
}) => {
  const [isActiveElement, setIsActiveElement] = useState<EntrancesType | null>(
    null
  );
  const [modalFlatsIsOpen, setModalFlatsIsOpen] = useState(false);

  const handleChooseElement = (item: EntrancesType) => {
    setIsActiveElement(item);
    setModalFlatsIsOpen(true);
  };

  return (
    <>
      {isOpen && (
        <>
          <div className={styles["modal"]}>
            <div className={styles["modal-wrapper"]}>
              <div className={styles["modal-header"]}>
                <Typography
                  fontSize={"14"}
                  color={"#FFFFFF"}
                  lineHeight={"20"}
                  letterSpacing={"2"}
                >
                  {title}
                </Typography>
                <Button
                  onClick={() => onClose()}
                  variant={"small"}
                  className={styles["modal-close-button"]}
                >
                  <CloseIcon />
                </Button>
              </div>
              <div className={styles["modal-body"]}>
                {list?.map((item) => (
                  <Button
                    key={`${item} + ${Math.random() * 10}`}
                    onClick={() => handleChooseElement(item)}
                    isActive={isActiveElement === item}
                    variant={"list"}
                  >
                    {item.number}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <ModalFlats
            title={"Номер квартиры"}
            houseNumber={houseNumber}
            activeElement={isActiveElement}
            isOpen={modalFlatsIsOpen}
            onCloseEntrances={onClose}
            onClose={() => setModalFlatsIsOpen(false)}
          />
        </>
      )}
    </>
  );
};
