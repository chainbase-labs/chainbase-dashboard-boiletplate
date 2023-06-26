import React from "react";
import ReactMarkdown from "react-markdown";

const StyleH1: React.FC<{ children: React.ReactNode & React.ReactNode[] }> = ({
  children,
}) => {
  return <h1 className="text-4xl font-bold text-gray-900 mb-6">{children}</h1>;
};

const StyleH2: React.FC<{ children: React.ReactNode & React.ReactNode[] }> = ({
  children,
}) => {
  return (
    <h2 className="text-3xl font-semibold text-gray-900 mb-4">{children}</h2>
  );
};

const StyleH3: React.FC<{ children: React.ReactNode & React.ReactNode[] }> = ({
  children,
}) => {
  return (
    <h3 className="text-2xl font-medium text-gray-900 mb-2">{children}</h3>
  );
};

const StyleParagraph: React.FC<{ children: React.ReactNode & React.ReactNode[] }> = ({
  children,
}) => {
  return (
    <p className="text-gray-900 mb-2">{children}</p>
  );
};

interface MarkdownProps {
  content: string;
  isEditing?: boolean;
  onEdit?: (content: string) => void;
}

export default function Markdown({
  content,
  isEditing,
  onEdit,
}: MarkdownProps) {
  return (
    <div className="p-4 h-full">
      {isEditing ? (
        <textarea
          className="w-full h-full outline-none"
          value={content}
          onChange={(e) => {
            if (onEdit) onEdit(e.target.value);
          }}
        />
      ) : (
        <ReactMarkdown
          components={{
            h1: StyleH1,
            h2: StyleH2,
            h3: StyleH3,
            p: StyleParagraph,
          }}
        >
          {content}
        </ReactMarkdown>
      )}
    </div>
  );
}
