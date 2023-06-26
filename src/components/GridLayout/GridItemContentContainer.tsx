import DragableIcon from "@/components/Icons/DragableIcon";
import { FC, useEffect, useState } from "react";
import OpenTabIcon from "../Icons/OpenTabIcon";
import CorrectIcon from "../Icons/CorrectIcon";
import EditIcon from "../Icons/EditIcon";

const HeaderBtn: FC<{ onClick: () => void, children: React.ReactNode }> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-blue-900 hover:text-blue-500 w-5 h-5 inline-flex justify-center items-center cursor-pointer"
    >
      {children}
    </button>
  );
}

interface GridItemContentContainerHeaderProps {
  dragable?: boolean;
  title: string;
  outerUrl?: string;
  onEdit?: (isEditing: boolean) => void;
}

const GridItemContentContainerHeader: FC<
  GridItemContentContainerHeaderProps
> = ({ title, dragable, outerUrl, onEdit }) => {
  const [isEditing, setIsEditiong] = useState(false);
  useEffect(() => {
    onEdit && onEdit(isEditing)
  }, [onEdit, isEditing])
  return (
    <header className="py-2 flex items-center font-medium w-full border-b border-blue-100 bg-blue-100 px-2">
      <div className="flex items-center flex-grow">
        <div className="w-5 h-5">
          {dragable && (
            <DragableIcon
              className="grid-item__dragable-handler cursor-move fill-blue-300 "
              size={20}
            />
          )}
        </div>
        <span className="ml-1 text-blue-900">{title}</span>
      </div>
      <div className="flex items-center">
        {outerUrl && (
          <a
            href={outerUrl}
            target="_blank"
            rel="noreferrer"
            className="text-blue-900 hover:text-blue-500 w-5 h-5 inline-flex"
          >
            <OpenTabIcon />
          </a>
        )}
        {onEdit &&
          (isEditing ? (
            <HeaderBtn onClick={() => setIsEditiong(false)}>
              <CorrectIcon />
            </HeaderBtn>
          ) : (
            <HeaderBtn onClick={() => setIsEditiong(true)}>
              <EditIcon />
            </HeaderBtn>
          ))}
      </div>
    </header>
  );
};

interface GridItemContentContainerProps {
  title: string;
  children: React.ReactNode;
  dragable?: boolean;
  outerUrl?: string;
  onEdit?: (isEditing: boolean) => void;
}

const GridItemContentContainer: FC<GridItemContentContainerProps> = ({
  title,
  dragable,
  outerUrl,
  children,
  onEdit,
}) => {
  return (
    <div className="w-full h-full flex flex-col bg-white rounded overflow-hidden shadow-lg">
      <GridItemContentContainerHeader
        title={title}
        dragable={dragable}
        outerUrl={outerUrl}
        onEdit={onEdit}
      />
      <div className="flex-1 p-1 overflow-hidden">{children}</div>
    </div>
  );
};

export default GridItemContentContainer;
