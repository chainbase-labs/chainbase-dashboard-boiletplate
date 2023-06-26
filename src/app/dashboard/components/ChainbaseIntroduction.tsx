import Markdown from "@/components/Markdown";
import GridItemContentContainer from "@/components/GridLayout/GridItemContentContainer";
import { useEffect, useState } from "react";

const defaultIntroduction = `# Chainbase\n\n
Chainbase is an all-in-one data infrastructure for Web3 that allows you to index, transform, and use on-chain data at scale. By leveraging enriched on-chain data and streaming computing technologies across one data infrastructure, Chainbase automates the indexing and querying of blockchain data, enabling developers to accomplish more with less effort.\n\n
\n\n`

export default function ChainbaseIntroduction() {
  const [content, setContent] = useState(defaultIntroduction)
  const [isEditing, setIsEditiong] = useState(false)
  useEffect(() => {
    localStorage.setItem('chainbase-introduction', content)
  }, [content])
  // useEffect(() => {
  //   const content = localStorage.getItem('chainbase-introduction')
  //   if (content) {
  //     setContent(content)
  //   }
  // }, [])

  

  return (
    <GridItemContentContainer title="" dragable onEdit={setIsEditiong}>
      <Markdown content={content} isEditing={isEditing} onEdit={setContent} />
    </GridItemContentContainer>
  );
}
