// @flow
import * as React from "react";
import TimesContainer from "../containers/TimesContainer";
import TeamTimesContainer from "../containers/TeamTimesContainer";
type Props = {};
export const TimePage = (props: Props) => {
  return (
    <>
      <TimesContainer></TimesContainer>
      <TeamTimesContainer></TeamTimesContainer>
    </>
  );
};
