import React, { useState } from "react";
import {
  SideBarItem,
  SystemSpec,
  LanguageColumnTitle,
  LanguageEach,
  LanguagesCheckMark,
} from "../../StyledComponents.jsx";

const Languages = (props) => {
  const [show, setShow] = useState(false);
  const [btn, setBtn] = useState(true);
  const showMore = () => {
    setShow(!show);
    setBtn(!btn);
  };

  return (
    <SideBarItem>
      <SystemSpec>Languages: </SystemSpec>
      <table>
        <thead>
          <tr>
            <LanguageColumnTitle></LanguageColumnTitle>
            <LanguageColumnTitle>Interface</LanguageColumnTitle>
            <LanguageColumnTitle>Full Audio</LanguageColumnTitle>
            <LanguageColumnTitle>Subtitles</LanguageColumnTitle>
          </tr>
        </thead>
        <tbody>
          <tr>
            <LanguageEach>English</LanguageEach>
            {props.languages.English.map((item, index) => (
              <LanguagesCheckMark key={index.toString()}>
                {item ? "✔" : null}
              </LanguagesCheckMark>
            ))}
          </tr>
          <tr>
            <LanguageEach>French</LanguageEach>
            {props.languages.French.map((item, index) => (
              <LanguagesCheckMark key={index.toString()}>
                {item ? "✔" : null}
              </LanguagesCheckMark>
            ))}
          </tr>
          <tr>
            <LanguageEach>German</LanguageEach>
            {props.languages.German.map((item, index) => (
              <LanguagesCheckMark key={index.toString()}>
                {item ? "✔" : null}
              </LanguagesCheckMark>
            ))}
          </tr>
          <tr>
            <LanguageEach>Japanese</LanguageEach>
            {props.languages.Japanese.map((item, index) => (
              <LanguagesCheckMark key={index.toString()}>
                {item ? "✔" : null}
              </LanguagesCheckMark>
            ))}
          </tr>
          <tr>
            <LanguageEach>Korean</LanguageEach>
            {props.languages.Korean.map((item, index) => (
              <LanguagesCheckMark key={index.toString()}>
                {item ? "✔" : null}
              </LanguagesCheckMark>
            ))}
          </tr>
          <tr style={{ display: show ? "table-row" : "none" }}>
            <LanguageEach>Russian</LanguageEach>
            {props.languages.Russian.map((item, index) => (
              <LanguagesCheckMark key={index.toString()}>
                {item ? "✔" : null}
              </LanguagesCheckMark>
            ))}
          </tr>
          <tr style={{ display: show ? "table-row" : "none" }}>
            <LanguageEach>Simplified-Chinese</LanguageEach>
            {props.languages.SimplifiedChinese.map((item, index) => (
              <LanguagesCheckMark key={index.toString()}>
                {item ? "✔" : null}
              </LanguagesCheckMark>
            ))}
          </tr>
          <tr style={{ display: show ? "table-row" : "none" }}>
            <LanguageEach>Spanish-Latin America</LanguageEach>
            {props.languages.SpanishLatinAmerica.map((item, index) => (
              <LanguagesCheckMark key={index.toString()}>
                {item ? "✔" : null}
              </LanguagesCheckMark>
            ))}
          </tr>
          <tr style={{ display: show ? "table-row" : "none" }}>
            <LanguageEach>Spanish-Spain</LanguageEach>
            {props.languages.SpanishSpain.map((item, index) => (
              <LanguagesCheckMark key={index.toString()}>
                {item ? "✔" : null}
              </LanguagesCheckMark>
            ))}
          </tr>
          <tr style={{ display: show ? "table-row" : "none" }}>
            <LanguageEach>Traditional-Chinese</LanguageEach>
            {props.languages.TraditionalChinese.map((item, index) => (
              <LanguagesCheckMark key={index.toString()}>
                {item ? "✔" : null}
              </LanguagesCheckMark>
            ))}
          </tr>
        </tbody>
      </table>
      <div>
        <a
          role="button"
          onClick={showMore}
          style={{ display: btn ? "table-row" : "none" }}
        >
          Show more
        </a>
      </div>
    </SideBarItem>
  );
};

export default Languages;
