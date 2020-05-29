import React, { useState } from "react";
import RelatedContent from "./RelatedContent.jsx";

import {
  LeftColumn,
  Heading2,
  MainBodyText,
  MainBodyImage,
  DottedLine,
  ShowWrap,
  ContentDesc,
  Paragraph,
  Italics,
  SystemSpec,
  SystemMin,
  Strong,
} from "../StyledComponents.jsx";

const Mainbody = (props) => {
  // console.log('mainbody props: ', props);
  const { description } = props.mainbodydata;
  const matureContent = props.mainbodydata.maturecontent.description.join(
    ", "
  );
  const os = props.mainbodydata.sysrequirement.os.join(", ");
  const { processor } = props.mainbodydata.sysrequirement;
  const { memory } = props.mainbodydata.sysrequirement;
  const gphx = props.mainbodydata.sysrequirement.graphics;

  const [show, setShow] = useState(false);
  const [btn, setBtn] = useState(true);
  const showMore = () => {
    setShow(!show);
    setBtn(!btn);
  };

  return (
    <LeftColumn>
      <Heading2>ABOUT THIS GAME:</Heading2>
      <div>
        <MainBodyText>{description}</MainBodyText>
        <MainBodyImage alt="" src={props.mainbodydata.images[0]} />
        <div style={{ display: show ? "table-row" : "none" }}>
          <MainBodyText>{description}</MainBodyText>
          <MainBodyImage src={props.mainbodydata.images[1]} />
          <MainBodyText>{description}</MainBodyText>
          <DottedLine />
          <Strong>ABOUT GAMEPLAY IN VR:</Strong>
          <MainBodyText>{description}</MainBodyText>
        </div>
      </div>
      <ShowWrap>
        <a onClick={showMore} style={{ display: btn ? "table-row" : "none" }}>
          Show more
        </a>
      </ShowWrap>
      <ContentDesc>
        <Heading2>MATURE CONTENT DESCRIPTION:</Heading2>
        <Paragraph>The developers describe the content like this: </Paragraph>
        <Paragraph>
          <Italics>{matureContent}</Italics>
        </Paragraph>
      </ContentDesc>

      <div>
        <Heading2>SYSTEM REQUIREMENTS:</Heading2>
        <SystemSpec>MINIMUM:</SystemSpec>
        <SystemSpec>
          OS: <SystemMin>{os}</SystemMin>
        </SystemSpec>
        <SystemSpec>
          Processor: <SystemMin>{processor}</SystemMin>
        </SystemSpec>
        <SystemSpec>
          Memory: <SystemMin>{memory}</SystemMin>
        </SystemSpec>
        <SystemSpec>
          Graphics: <SystemMin>{gphx}</SystemMin>
        </SystemSpec>
      </div>

      <RelatedContent relatedcontent={props.relatedcontent} />
    </LeftColumn>
  );
};

export default Mainbody;
